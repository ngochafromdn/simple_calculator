import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else if (value === "DEL") {
      deleteLast();
    } else {
      setInput(input + value);
    }
  };

  const calculate = async () => {
    try {
      const response = await fetch(
        `/calculate?operation=${input}&num1=${result}&num2=${input}`
      );
      const data = await response.json();
      setResult(data.result);
      setInput(""); // Clear input for the next calculation
    } catch (error) {
      console.error("Error calculating:", error);
    }
  };
  

  const clear = () => {
    setInput("");
    setResult("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <input type="text" value={result} readOnly />
        </div>
        <div className="buttons">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <button key={number} onClick={() => handleButtonClick(String(number))}>
              {number}
            </button>
          ))}
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button className="pink-button" onClick={() => handleButtonClick("C")}>
            C
          </button>
          <button className="pink-button" onClick={() => handleButtonClick("DEL")}>
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
