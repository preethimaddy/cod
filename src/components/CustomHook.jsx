import {React,useState} from 'react'

const CustomHook = () => {
    const[show, setShow] = useState(false)
  return (
  
    <>
    <h2>!!! Custom Hook !!!</h2>
    <button type='toggle' className='btn btn-primary' 
    onClick={()=> setShow(!show)
    }>Toggle</button>
    {show && <h4>Some Stuff</h4>}
    </>
  )
} 

export default CustomHook