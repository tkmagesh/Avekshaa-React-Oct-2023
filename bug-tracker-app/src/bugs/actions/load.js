
import bugApi from '../services/bugApi';
export function load(){
    return async function(dispatch){
        const bugs = await bugApi.loadBugs()
        const load_action = {
            type : 'BUG_LOAD',
            payload : bugs
        }
        dispatch(load_action)
    }
}