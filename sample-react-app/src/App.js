import React, {useState} from 'react'
import './App.css';
import Greeter from './components/greeter'
import { Calculator, Calculator2} from './components/calculator'
import Products from './components/products';

function App(){
    let [userChoice, setUserChoice] = useState('')
    console.log('App rendered')
    return (
        <div>
          <h1>My Fantastic App</h1>
          <hr/>
            <div>
                <button onClick={() => setUserChoice('Greeter')}>Greeter</button>
                <button onClick={() => setUserChoice('Calculator-1')}>Calculator-1</button>
                <button onClick={() => setUserChoice('Calculator-2')}>Calculator-2</button>
                <button onClick={() => setUserChoice('Products')}>Products</button>
            </div>
            <div>
                {userChoice === '' ? <span>Select you option</span> : null }
                {userChoice === 'Greeter' ? <Greeter template="Have a nice day!"/> : null}
                {userChoice === 'Calculator-1' ? <Calculator/> : null}
                {userChoice === 'Calculator-2' ? <Calculator2/> : null}
                {userChoice === 'Products' ? <Products/> : null}
            </div>
        </div>
    )
}

export default App;
