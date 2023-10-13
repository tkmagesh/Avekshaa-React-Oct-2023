import bugApi from "../services/bugApi"

export function remove(bug){
    return async function(dispatch){
        await bugApi.remove(bug);
        dispatch({
            type : 'BUG_REMOVE',
            payload : bug
        });
    }
}