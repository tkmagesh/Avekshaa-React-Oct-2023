
function BugItem({bug, remove}){
    return (
        <li>
            <span className={ "bugname " + (bug.isClosed ? 'closed' : '')}>{bug.name}</span>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}

export default BugItem;