import React, { useState } from 'react'
import './App.css';
import Button from './Button';

const btnValues = [
  ["+", "-", "/"],
  ["^", "SWAP", "*"],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["ON/OFF", 0, "CLEAR"],
];

const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const [active, setActive] = useState(true)
  return (
    <div className="container">
      <table className='containerNum'>
        <tr>
          <th>Number 1</th>
          <th>Number 2</th>
          <th>Result</th>
        </tr>
        <tr>
          <td>{num1}</td>
          <td>{num2}</td>
          <td>{result}</td>
        </tr>
      </table>
      <div className="buttonBox">
        {
          btnValues.flat().map((btn, i) => {
            if(btn ==='ON/OFF'){
              return(
                <Button
                  key={i}
                  className={"toogle"}
                  active={true}
                  value={btn}
                  onClick={() => {
                    setActive(!active)
                    console.log(active);
                  }}
                />
              )
            }
            if(btn ==='CLEAR'){
              return(
                <Button
                  key={i}
                  className={"clearBtn"}
                  active={active}
                  value={btn}
                  onClick={() => {
                    setNum1(null)
                    setNum2(null)
                    setResult(null)
                  }}
                />
              )
            }
            return (
              <Button
                key={i}
                className={!Number.isInteger(btn) ? "operation" : ""}
                active={active}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default Calculator