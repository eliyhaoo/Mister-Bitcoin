
export const userService = {
    getUser,
    createUser
}

let gUser 

function getUser(){
    if (gUser) return gUser 
    return null
}

function createUser(name){
    const newUser =  {
        name,
        coins: 19000,
        moves: [] 
    }
    gUser = newUser
    return newUser
}
