import {useState} from 'react'

const Toggle = () => {
    const [showAlert, setShowAlert] = useState(false)
    // const ToggleAlert =()=>{
    //     if(showAlert){
    //         setShowAlert(false);
    //         return
    //     }
    //     setShowAlert();
   // }
  return (
    <div>
        <button className='btn' onClick={()=>setShowAlert(!showAlert)}>Toggle</button>

       {showAlert && <Alert />  } 
    </div>
  )
};
const Alert = ()=>{
    return <div className='alert alert-danger'> 
Hello World!!!!!!!
    </div>
}

export default Toggle