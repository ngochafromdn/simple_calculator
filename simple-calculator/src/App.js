import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = value => {
        setInput(prevInput => prevInput + value);
    };

    const handleRestart = () => {
        setInput('');
        setResult('');
    };

    const handleArithmetic = operation => {
        setInput(prevInput => prevInput + operation);
    };

    const handleDelete = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            setResult(eval(input));
            setInput('');
        } catch (error) {
            setResult('Error');
        }
    };

    const numberButtons = [];
    for (let i = 0; i <= 9; i++) {
        numberButtons.push(
            <CalculatorButton key={i} onClick={() => handleButtonClick(i)}>
                {i}
            </CalculatorButton>
        );
    }

    return (
        <div className="calculator">
            <CalculatorDisplay input={input} result={result} />
            <div className="buttons">
                {numberButtons}
                <CalculatorButton onClick={() => handleArithmetic('+')}>+</CalculatorButton>
                <CalculatorButton onClick={() => handleArithmetic('-')}>-</CalculatorButton>
                <CalculatorButton onClick={() => handleArithmetic('*')}>*</CalculatorButton>
                <CalculatorButton onClick={() => handleArithmetic(' / ')}>÷</CalculatorButton>
                <CalculatorButton onClick={handleDelete}>DEL</CalculatorButton>
                <CalculatorButton className="restart-button" onClick={handleRestart}>ON</CalculatorButton>
                <CalculatorButton onClick={calculateResult}>=</CalculatorButton>
            </div>
        </div>
    );
}

export default App;
