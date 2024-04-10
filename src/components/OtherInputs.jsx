import React from 'react'
import {useState} from 'react'
const frameworks = ['react', 'angular', 'vue' , 'svelte']
const OtherInputs = () => {
     const [shipping, setShipping] = useState(false);
     const [framework, setFramework] = useState(false);
     const handleShipping = (e) => {
      console.log(e.target.checked);
        setShipping(e.target.checked)
     }
     const handleFramework = (e) => {
        console.log(e.target.value);
          setFramework(e.target.value)
       }
  return (
    <><div>
          <form className='form'>
              <h4>Other Inputs</h4>
              <div className='form-row' style={{textAlign: 'left'}}>
                  <label htmlFor='shipping'  className='shipping'>Free Shipping</label>
                  <input type='checkbox' name='shipping' id='shipping'onChange={handleShipping} checked={shipping} />
              </div>
              
              <div className='form-row' style={{textAlign: 'left'}}>
                  <label htmlFor='framework' className='form-label'>
                    FrameWork
                    </label>   
                    <select name='framework' onChange={handleFramework} id='framework'>
                        {frameworks.map((framework)=>{
                            return <option key={framework}>{framework}</option>
                        })}
                        </select>  
              </div>
              <button type='submit' className='btn btn-block'>submit</button>
              </form>
              </div>
              </>
  )
}

export default OtherInputs