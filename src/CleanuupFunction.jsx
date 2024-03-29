import {useEffect, useState} from 'react'

const CleanuupFunction = () => {
    const [toggle, setToggle] =useState(false)
    console.log('render')
  return (
    <div>
         <button className='button' onClick={()=> setToggle(!toggle)}>Cleanup</button>
       {toggle && <Random />}
        </div>
  )
}
const Random =()=>{
    useEffect(()=>{
// console.log('Hmm, this is Interesting');

 const intId = setInterval(()=>{
  //  console.log('Hiii from Interval');

}, 2000)
return()=>{
clearInterval(intId);
}
},[])

    return <h2>Hey There!</h2>
}
export default CleanuupFunction