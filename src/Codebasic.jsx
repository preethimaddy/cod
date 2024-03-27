import React, { useEffect } from 'react'
import {useState} from 'react'
const Codebasic = () => {
    const [value, setvalue]= useState(0);

    const sayHello =() => {
console.log('Hello There!!');
// Be careful you will have Infinite loop************************************************************8
//If we updating state value inside the function_________ 
    };
    sayHello();
    useEffect ( ()=>{
        console.log('hello from useffect');
    },[]);
  return (
    <div>
        <h1> value: {value}</h1>
        <button className='btn' onClick={()=> setvalue(value+1)}>clickme</button>
    </div>
  )
}

export default Codebasic