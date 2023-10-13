let StateManager = (()=>{
    let _currentState = undefined,
        _subscriber = undefined,
        _reducer = undefined

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
        _subscriber()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('reducer function is mandatory to create a store');
        }
        _reducer = reducer;
        return { getState, subscribe, dispatch }
    }

    return { createStore };
})()