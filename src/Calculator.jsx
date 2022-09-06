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
  const [active, setActive] = useState(true);
  const [activeNum1, setActiveNum1] = useState(true)

  const clearNum = () =>{
    setNum1(null)
    setNum2(null)
    setResult(null)
  }
  const numClicked = (value) =>{
    if(activeNum1){
      if(num1){
        let num1Value = '' + num1 + value
        setNum1(parseInt(num1Value));
      }else{
        setNum1(value)
      }
    }else{
      if(num2){
        let num2Value = '' + num2 + value
        setNum2(parseInt(num2Value));
      }else{
        setNum2(value)
      }
    }
  }

  const swapHandler = () =>{
    const temp = num1;
    setNum1(num2);
    setNum2(temp);
  }

  const operationHandler = (type) =>{
    if(num1 && num2){
      switch (type) {
        case "+":
          setResult(num1+num2)
          break;
        case "-":
          setResult(num1-num2)
          break;
        case "/":
          setResult(num1/num2)
          break;
        case "^":
          setResult(Math.pow(num1,num2))
          break;
        case "*":
          setResult(num1*num2)
          break;
      }
    }else{
      alert("fill the number!")
    }
  }

  return (
    <div className="container">
      <table className='containerNum'>
        <tr>
          <th className={activeNum1 ? 'activeNum' : ''}>Number 1</th>
          <th className={!activeNum1 ? 'activeNum' : ''}>Number 2</th>
          <th>Result</th>
        </tr>
        <tr>
          <td onClick={()=>setActiveNum1(true)}>{num1}</td>
          <td onClick={()=>setActiveNum1(false)}>{num2}</td>
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
                    clearNum()
                    setActive(!active)
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
                    clearNum()
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
                  Number.isInteger(btn) ? numClicked(btn) :
                  btn ==="SWAP" ?  swapHandler() :
                  operationHandler(btn)
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