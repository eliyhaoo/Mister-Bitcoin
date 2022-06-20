import { createStore } from 'vuex'
import contact from './modules/contact.js'

// Create a new store instance.
const storeOptions = {
    strict: true,
    state: {
    },
    mutations: {
     
    },
    getters:{
    },
    modules:{
        contact
    }
}
const store = createStore(storeOptions)
export default store