import { dbService } from "./db.service"

const STORAGE_KEY = 'contactsDB'
export const contactService = {
    getContacts,
    getById,
    getEmptyContact,
    save,
    remove
    
}

async function getContacts(){
    let contacts = await dbService.query(STORAGE_KEY)

    if (!contacts || !contacts.length){
        contacts = gContacts
        await dbService.insert(STORAGE_KEY,contacts)
    }
    return contacts

    
}
async function getById(contactId){
    return await dbService.get(STORAGE_KEY,contactId)
}
 function getEmptyContact(){
    return {
        "name": "",
        "email": "",
        "phone": ""
    }
}

async function save(contact){
    if (contact._id)  return await dbService.put(STORAGE_KEY,contact)
    else   return  await dbService.post(STORAGE_KEY,contact)  
}
async function remove(contactId){
    return await dbService.remove(STORAGE_KEY,contactId)
}


const gContacts = [
    {
        "_id": "5a56640269f443a5d64b32ca", 
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 352-1483"
    },
    {
        "_id": "5a5664fs0269f443a5d64b32ca",
         "name": "Pikahu pompe",
        "email": "Pikahufdg@renovize.com",
        "phone": "+1 (687) 593-1685"
    },
    {
        "_id": "5a566402fsa69f443a5d64b32ca", 
        "name": "Rinat Hmayde",
        "email": "Rinat_h@renovize.com",
        "phone": "+1 (546) 535-3864"
    },
    {
        "_id": "5a56640269fas443a5d64b32ca",
         "name": "Bali bamba",
        "email": "Bali_mashu@renovize.com",
        "phone": "+1 (354) 592-3524"
    },
    {
        "_id": "5a56640269f4fsa43a5d64b32ca", 
        "name": "Goni misHyde",
        "email": "Goniasi@renovize.com",
        "phone": "+1 (489) 593-3824"
    },
]