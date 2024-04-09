import React from 'react'
import {useState} from 'react'
const MultipleInputs = () => {
    const [user, setUser] = useState ({
        name:'',
        email:'',
        password:'',
    });
    const handleChange = (e)=>{
console.log(e.target.value);
setUser({...user, [e.target.name]:e.target.value});
    };
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user);
   } 
  return (
    <><div>
          <form className='form' onSubmit={handleSubmit}>
              <h4>Multiple Inputs</h4>

              <div className='form-row'>
                  <label htmlFor='name' className='form-label'>Name</label>
                  <input type='text' id='name' value={user.name} onChange={handleChange} name='name'className='form-input' />
              </div>
              <div className='form-row'>
                  <label htmlFor='email' className='form-label'>Email</label>
                  <input type='text' id='email' value={user.email} onChange={handleChange} name='email' className='form-input' />
              </div>
              <div className='form-row'>
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input type='password' id='password' value={user.password} onChange={handleChange} name='password' className='form-input' />
              </div>
              <button type='submit'  onSubmit={handleSubmit} className='btn btn-primary'>Submit</button>
          </form>

      </div></>
  )
}

export default MultipleInputs