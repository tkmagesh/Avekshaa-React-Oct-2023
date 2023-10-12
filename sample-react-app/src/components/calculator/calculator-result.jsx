import React from 'react';
import './calculator.css';

function CalculatorResult({ result }) {
    return (
        <div className={result >= 0 ? 'positive' : 'negative'}>{result}</div>
    )
}

export default CalculatorResult