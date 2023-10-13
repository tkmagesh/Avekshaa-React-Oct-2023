let currentBugId = 3;
export function create(bugName){
    const newBugPayload = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
    }
    return { type : 'BUG_CREATE', payload : newBugPayload };
}