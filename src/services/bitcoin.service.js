import axios from "axios"
import {dbService} from "../services/db.service"

const PRICE_HISTORY_KEY = 'price-historyDB'
const TRANSACTIONS_HISTORY_KEY = 'transactions-historyDB'
export const bitcoinService = {
    getRate,
    getPriceHistory,
    getTransactionsHistory
}

async function getRate(coins){

    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
   
    
}
async function getPriceHistory(){

    let priceHistory = await dbService.query(PRICE_HISTORY_KEY)
    if (!priceHistory ||!priceHistory.length){
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        console.log('priceHistroy',res.data);
        await dbService.insert(PRICE_HISTORY_KEY,res.data.values)
        priceHistory = res.data.values
    }
    return priceHistory
   
    
}
async function getTransactionsHistory(){

    let transactionsHistory = await dbService.query(TRANSACTIONS_HISTORY_KEY)
    if (!transactionsHistory ||!transactionsHistory.length){
        const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
     
        await dbService.insert(TRANSACTIONS_HISTORY_KEY,res.data.values)
        transactionsHistory = res.data.values
    }
    return transactionsHistory
   
    
}
