import bugApi from "../services/bugApi";

export function create(bugName){
    return async function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        const newBug = await bugApi.save(newBugData)
        const bug_create_action = { type : 'BUG_CREATE', payload : newBug };
        dispatch(bug_create_action);
    }
}