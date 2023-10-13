

function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'BUG_CREATE':
            return [...currentState, action.payload]
        case 'BUG_LOAD':
            console.log('load action dispatched')
            return action.payload;
        case 'BUG_REMOVE':
            return currentState.filter(bug => bug.id !== action.payload.id)
        default:
            break;
    }
    return currentState;
}

export default bugsReducer;
