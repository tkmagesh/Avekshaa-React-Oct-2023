let StateManager = (()=>{
    let _currentState = undefined,
        _subscriber = undefined,
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }
    function subscribe(cb){
        _subscriber = cb;
    }
    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return; //NO state changes
        _currentState = newState;
        if (typeof _subscriber === 'function')
            _subscriber()
    }

    function bindActionCreators(actionCreators, dispatch){
        const actionDispatchers = {}
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args)
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('reducer function is mandatory to create a store');
        }
        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action) // to initialize the store with the default state (much before any action is dispatched)
        return { 
            getState : getState, 
            subscribe : subscribe, 
            dispatch :dispatch
        }
    }

    return { createStore, bindActionCreators };
})()