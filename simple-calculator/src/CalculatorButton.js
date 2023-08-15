import React from 'react';

function CalculatorButton({ children, onClick }) {
    return (
        <button className="calculator-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default CalculatorButton;
