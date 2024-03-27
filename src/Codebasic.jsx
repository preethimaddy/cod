import React, { useEffect } from 'react'
import {useState} from 'react'
const Codebasic = () => {
    const [value, setvalue]= useState(0);
    const [secondValue, setSecondValue] = useState(0);
//     const sayHello =() => {
// console.log('Hello There!!');
// // Be careful you will have Infinite loop************************************************************8
// //If we updating state value inside the function_________ 
//     };
//     sayHello();
    useEffect ( ()=>{
        console.log('hello from first useffect');
    },[value]);
    useEffect ( ()=>{
        console.log('hello from second useffect');
    },[secondValue]);
  return (
    <div>
        <h1> value: {value}</h1>
        <button className='btn' onClick={()=> setvalue(value+1)}>clickme</button>
        <h1> SecondValue: {secondValue}</h1>
        <button className='btn' onClick={()=> setSecondValue(secondValue+1)}>clickme</button>
    </div>
  )
}

export default Codebasic