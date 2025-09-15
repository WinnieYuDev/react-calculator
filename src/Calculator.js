import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';


function Calculator() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (input) => {
    setDisplay((prev) => prev + input);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="outerdisplay">
        <input type="text" className="display" value={display} readOnly />
      </div>
      <div className="keys">
        <button className="button-operator" onClick={() => appendToDisplay('*')}>*</button>
        <button className="button-number" onClick={() => appendToDisplay('7')}>7</button>
        <button className="button-number" onClick={() => appendToDisplay('8')}>8</button>
        <button className="button-number" onClick={() => appendToDisplay('9')}>9</button>

        <button className="button-operator" onClick={() => appendToDisplay('/')}>/</button>
        <button className="button-number" onClick={() => appendToDisplay('4')}>4</button>
        <button className="button-number" onClick={() => appendToDisplay('5')}>5</button>
        <button className="button-number" onClick={() => appendToDisplay('6')}>6</button>

        <button className="button-operator" onClick={() => appendToDisplay('+')}>+</button>
        <button className="button-number" onClick={() => appendToDisplay('1')}>1</button>
        <button className="button-number" onClick={() => appendToDisplay('2')}>2</button>
        <button className="button-number" onClick={() => appendToDisplay('3')}>3</button>

        <button className="button-operator" onClick={() => appendToDisplay('-')}>-</button>
        <button className="button-number zero" onClick={() => appendToDisplay('0')}>0</button>
        <button className="button-decimal" onClick={() => appendToDisplay('.')}>.</button>
        <button className="button-equal" onClick={calculate}>=</button>
        <button className="button-operator" onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
