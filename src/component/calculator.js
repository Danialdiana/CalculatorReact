import './calculator.css'
import React, { useState } from "react";
import Container from '@mui/material/Container';

const Calculator = () => {
    const [number, setNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operator, setOperator] = useState()

    const inputNumber =(s) =>{
        let input = s.target.value
        if(number === 0) {
            setNumber(input)
        } else {
            setNumber(number + input)
        }
    }

    const allClear=() =>{
        setNumber(0)
    }

    const deleteNumber = () => {
        setNumber(number.slice(0, -1))
    }

    const operatorInput=(o)=> {
        let operator = o.target.value
        setOldNumber(number)
        setNumber(0)
        setOperator(operator)
    }

    const calculate = ()=> {
        if(operator === "+") {
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        } else if(operator === "-") {
            setNumber(parseFloat(oldNumber) - parseFloat(number))
        } else if(operator === "x") {
            setNumber(parseFloat(oldNumber) * parseFloat(number))
        } else if(operator === "/") {
            setNumber(parseFloat(oldNumber) / parseFloat(number))
        }
        setOperator("")
        setOldNumber(0)
    }


    return (
        <Container>
            <h1 className="result"> {number}</h1>
            <div className="calculator-body">
                    <button  onClick={inputNumber} value={7}>7</button>
                    <button  onClick={inputNumber} value={8}>8</button>
                    <button  onClick={inputNumber} value={9}>9</button>
                    <button  onClick={allClear}>DEL</button>
                    <button  onClick={inputNumber} value={4}>4</button>
                    <button  onClick={inputNumber} value={5}>5</button>
                    <button  onClick={inputNumber} value={6}>6</button>
                    <button  onClick={operatorInput} value="+">+</button>
                    <button  onClick={inputNumber} value={1}>1</button>
                    <button  onClick={inputNumber} value={2}>2</button>
                    <button  onClick={inputNumber} value={3}>3</button>
                    <button  onClick={operatorInput} value="-">-</button>
                    <button  onClick={inputNumber} value={"."}>,</button>
                    <button  onClick={inputNumber} value={0}>0</button>
                    <button  onClick={operatorInput} value="/">/</button>
                    <button  onClick={operatorInput} value="x">X</button>
                    <button className="s" onClick={deleteNumber} >RESET</button>
                    <button className="s" onClick={calculate}>=</button>
            </div>
        </Container>
      )
}

export default Calculator