import {useState} from 'react'

const UseToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)
  const toggle =() =>{
    setShow(!show);
  };
 return toggle
}

export default UseToggle