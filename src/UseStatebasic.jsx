import React from 'react'
import { useState } from 'react';
const UseStatebasic = () => {
//    const value = useState('hello')[0];
//    const func = useState('hello');
//    console.log(value);
//    console.log(func);
const [count, setCount] = useState(0);
const handleClick =()=>{
setCount(count+1);

}
  return (
    <div>
    <h4>you clicked {count} times</h4>
    <button type='button' className='btn' onClick={handleClick}>clickme</button>

    </div>
    
  )
}

export default UseStatebasic