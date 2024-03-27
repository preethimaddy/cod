import React from 'react'
import {useState} from 'react'
const Codebasic = () => {
    const [value, setvalue]= useState(0);

    const sayHello =() => {
console.log('Hello There!!');


    };
    sayHello();
  return (
    <div>
        <h1> value: {value}</h1>
        <button className='btn' onClick={()=> setvalue(value+1)}>clickme</button>
    </div>
  )
}

export default Codebasic