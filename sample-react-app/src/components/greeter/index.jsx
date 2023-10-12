import React, { useState } from 'react';
import './greeter.css'

function Greeter(props) {

    let [greetMsg, setGreetMsg] = useState('[default greet message]')
    let [userName, setUserName] = useState('Magesh');

    const onBtnGreetClick = () => {
        setGreetMsg(`Hi ${userName}, ${props.template}`);
    }

    const onTxtUserNameInput = (evt) => {
        setUserName(evt.target.value)
    }
    return (
        <div>
            <h1>Greeter</h1>
            <hr />
            <label htmlFor="">User Name :</label>
            <input type="text" onInput={onTxtUserNameInput} />
            <button onClick={onBtnGreetClick}>Greet</button>
            <div id="greet-message">{greetMsg}</div>
        </div>
    )
}

export default Greeter;