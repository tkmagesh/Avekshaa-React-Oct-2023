export function load(){
    return {
        type : 'BUG_LOAD',
        payload : [
            {id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()},
            {id : 2, name : 'User actions not recognized', isClosed : true, createdAt : new Date()},
            {id : 3, name : 'Authentication failure', isClosed : false, createdAt : new Date()},
        ]
    }
}