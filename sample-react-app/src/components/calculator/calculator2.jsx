import React, {useState} from "react"
import CalculatorResult from "./calculator-result"

function Calculator2() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [operation, setOperation] = React.useState('')
    const [result, setResult] = React.useState(0)

    const onBtnCalculateClick = () => {
        switch (operation) {
            case 'add':
                setResult(n1 + n2)
                break;
            case 'subtract':
                setResult(n1 - n2)
                break;
            case 'multiply':
                setResult(n1 * n2)
                break;
            case 'divide':
                setResult(n1 / n2)
                break;

            default:
                break;
        }
    }
    return (
        <div>
            <h1>Calculator-2</h1>
            <input type="number" value={n1} onInput={evt => setN1(parseInt(evt.target.value))} />
            <input type="number" value={n2} onInput={evt => setN2(parseInt(evt.target.value))} />
            <select onChange={evt => setOperation(evt.target.value)}>
                <option value="">---Select Operation---</option>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <br />
            <button onClick={onBtnCalculateClick}>Calculate</button>
            {/* <div>{result}</div> */}
            <CalculatorResult result={result} />
        </div>
    )
}
export default Calculator2;
