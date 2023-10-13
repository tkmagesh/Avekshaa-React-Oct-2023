import React, { useEffect, useState } from 'react';
import BugStats from './components/bug-stats';
import BugEdit from './components/bug-edit';
import BugList from './components/bug-list';

import { useSelector, useDispatch } from 'react-redux';
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';



function Bugs() {
    /* 
    const bugs = useSelector(storeState => storeState.bugsState)
    const closedCount = bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0); 
    */
    
    const {bugs, count, closedCount} = useSelector(storeState => {
      const bugs = storeState.bugsState,
        count = bugs.length,
        closedCount = bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0);
      return {bugs, count, closedCount }
    })
    const dispatch = useDispatch() 
    const {create, remove, load} = bindActionCreators(bugActionCreators, dispatch)

    // useEffect hook executes the given function when the component is load
    useEffect(() => {
      load();
    },[])
  return (
    <div>
     <h3>Bugs</h3>
      <BugStats count={count} closedCount={closedCount}/>
      <BugEdit create={create} />
      <BugList {...{bugs, remove}} />
    </div>
  );
}

export default Bugs