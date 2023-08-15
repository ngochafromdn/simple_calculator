import React from 'react';

function CalculatorDisplay({ input, result }) {
    return (
        <div className="calculator-display">
            <div className="input">{input}</div>
            <div className="result">{result}</div>
        </div>
    );
}

export default CalculatorDisplay;
