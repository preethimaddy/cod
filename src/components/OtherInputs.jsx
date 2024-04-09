import React from 'react'
import {useState} from 'react'

const OtherInputs = () => {
     const [shipping, setShipping] = useState(false);
     const handleShipping = (e) => {
      console.log(e.target.checked);
        setShipping(e.target.checked)
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
                  <label htmlFor='frameworks' className='form-label'>
                    FrameWork
                    </label>     
              </div>
              <button type='submit' className='btn btn-block'>submit</button>
              </form>
              </div>
              </>
  )
}

export default OtherInputs