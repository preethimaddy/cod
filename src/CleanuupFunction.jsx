import {useEffect, useState} from 'react'

const CleanuupFunction = () => {
    const [toggle, setToggle] =useState(false)
  return (
    <div>
         <button className='button' onClick={()=> setToggle(!toggle)}>Cleanup</button>
       {toggle && <Random />}
        </div>
  )
}
const Random =()=>{
    useEffect(()=>{
console.log('Hmm, this is Interesting');
    },[])
    return <h2>Hey There!</h2>
}
export default CleanuupFunction