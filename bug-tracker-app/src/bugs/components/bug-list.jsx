import BugItem from './bug-item'

function BugList({bugs, remove}){
    return (
        <section className="list">
          <ul>
              { bugs.map(bug => (<BugItem key={bug.id} bug={bug} remove={remove}></BugItem>))}
          </ul>
          <button>Remove Closed</button>
      </section>
    )
}

export default BugList;