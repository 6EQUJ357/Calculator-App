import React, { useState } from 'react'
import "./calculator-style.css"


export const Calculator = () => {

    const [result, setResult] = useState("");

    const click_handler = (event)=> {
        setResult(result.concat(event.target.name));
    }
    const click_clear = ()=> {
        setResult("");
    }
    const click_backspace = ()=> {
        setResult(result.slice(0, result.length - 1))
    }
    const click_result= () => {
        try{
        setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error")
        }
    }

  return (
    <div className='cal_box'>

            <h1 className='cal_head'>calculating...</h1>

        <div className='cal_container'>

            <form>
                <input type= "text" className='display'value={result}/>
            </form>

            <div className='keypad'>
                <button onClick={click_clear} className = "clear">clear</button>
                <button onClick={click_backspace} className = "highlight">C</button>
                <button  name = "/" onClick={click_handler} className = "highlight">&divide;</button>
                <button name = "7" onClick={click_handler} >7</button>
                <button name = "8" onClick={click_handler}>8</button>
                <button name = "9" onClick={click_handler}>9</button>
                <button name = "*" onClick={click_handler} className = "highlight">&times;</button>
                <button name = "4" onClick={click_handler}>4</button>
                <button name = "5" onClick={click_handler}>5</button>
                <button name = "6" onClick={click_handler}>6</button>
                <button name = "-" onClick={click_handler} className = "highlight">&ndash;</button>
                <button name = "1" onClick={click_handler}>1</button>
                <button name = "2" onClick={click_handler}>2</button>
                <button name = "3" onClick={click_handler}>3</button>
                <button name = "+" onClick={click_handler} className = "highlight">+</button>
                <button name = "0" onClick={click_handler}>0</button>
                <button name = "." onClick={click_handler}>.</button>
                <button onClick={click_result} className = "result">=</button>


            </div>
        </div>
    </div>
  )
}
