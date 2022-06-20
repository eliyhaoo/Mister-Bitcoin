import { contactService } from '@/services/contact.service.js'
export default {
    state:{
        contacts: [],
    },
    mutations:{
        setContacts(state,{contacts}){
            state.contacts = contacts
        },
        removeContact(state,{_id}){
            state.contacts = state.contacts.filter(contact=> contact._id!== _id)
        },
        saveContact(state,{contact}){
            if (contact._id){
               const idx =  state.contacts.findIndex(currContact=>currContact._id ===contact._id)
                state.contacts.splice(idx,1,contact)
            } else {
                state.contacts.push(contact)
            }
        }
    },

    actions:{
        async loadContacts({commit}) {
            try{

                const contacts = await contactService.getContacts() 
                commit({type:'setContacts', contacts}) 
            }catch(e){
                console.error('Failed to load contacts',e);
                throw(e)
            }
        },
        async saveContact({commit},{contact}) {
            try{

                await contactService.save(contact);
                commit({type:'saveContact', contact}) 
            }catch(e){
                console.error('Failed to save contact',e);
            }
        },
        async removeContact({commit},{_id}) {
            try{

                await contactService.remove(_id);
                commit({type:'removeContact', _id}) 
            }catch(e){
                console.error(`Failed to remove contact _id: ${_id}` ,e);
            }
        }

    },
    getters:{
        contacts(state){return state.contacts }
    }

}