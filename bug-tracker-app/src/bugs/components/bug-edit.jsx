import React, {useState} from 'react';

function BugEdit ({create}){
     const [newBugName, setNewBugName] = useState('')
    return (
        <section className="edit">
          <label htmlFor="">Bug Name :</label>
          <input type="text" onInput = {evt => setNewBugName(evt.target.value)}/>
          <button onClick={() => create(newBugName)}>Add New</button>
      </section>
    )
}

export default BugEdit;