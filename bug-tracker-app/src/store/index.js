import { combineReducers, createStore, applyMiddleware } from 'redux'
import bugsReducer from "../bugs/reducers/bugsReducer";
import thunk from 'redux-thunk';

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

function customThunkMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch, store.getState)
            }
            return next(action)
        }
    }
}
// using redux-thunk
// const store = createStore(rootReducer, applyMiddleware(thunk));


//using custom thunk
const store = createStore(rootReducer, applyMiddleware(customThunkMiddleware));
export default store;

