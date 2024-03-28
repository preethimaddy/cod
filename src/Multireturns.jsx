import React from 'react'
import { useState, useEffect } from 'react'
const Multireturns = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
setIsLoading(false);
        }, 3000)
    })
    if(isLoading){
        return <h2>Loading...</h2>
    }
  return (
    <div>Multiple return basics</div>
  )
}

export default Multireturns