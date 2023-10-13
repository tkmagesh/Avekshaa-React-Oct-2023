import { combineReducers, createStore } from 'redux'
import bugsReducer from "../bugs/reducers/bugsReducer";


// the following reducer should be refactored
const initialProjectsState = [
    {id : 100, name : 'Bug Tracker'},
    {id : 101, name : 'Expense Manager'},
]
function projectsReducer(currentState = initialProjectsState, action){
    return currentState;
}

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})
const store = createStore(rootReducer);

export default store;

