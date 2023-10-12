import React, {useState} from "react"
import CalculatorResult from './calculator-result';

function Calculator() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [result, setResult] = React.useState(0)
    const onAddClick = () => {
        setResult(n1 + n2)
        setN1(0)
        setN2(0)
    }
    const onSubtractClick = () => setResult(n1 - n2)
    const onMultiplyClick = () => setResult(n1 * n2)
    const onDivideClick = () => setResult(n1 / n2)
    return (
        <div>
            <h1>Calculator</h1>
            <input type="number" value={n1} onInput={evt => setN1(parseInt(evt.target.value))} />
            <input type="number" value={n2} onInput={evt => setN2(parseInt(evt.target.value))} />
            <br />
            <button onClick={onAddClick}>Add</button>
            <button onClick={onSubtractClick}>Subtract</button>
            <button onClick={onMultiplyClick}>Multiply</button>
            <button onClick={onDivideClick}>Divide</button>
            {/* <div>{result}</div> */}
            {/* { result >= 0 ? <div className="positive">{result}</div> : <div className="negative">{result}</div>} */}
            <CalculatorResult result={result} />
        </div>
    )
}

export default Calculator