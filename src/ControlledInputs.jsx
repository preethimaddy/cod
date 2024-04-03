import React from 'react'
import { useState } from 'react'
import {data, people} from './data'

const ControlledInputs = () => {
    const[name, setName] = useState('');
  
  const[users, setUsers] = useState(data,people);
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name) return;
    const fid = Date.now();
    const newUser = {id:fid, name}
    const updatedUsers = [...users ,newUser];    
    setUsers(updatedUsers) ;
    setName('') 
    console.log('Form Submitted');
   }
  return (
  <div>
    <form className='form' onSubmit={handleSubmit}>
<h4>Controlled Inputs</h4>

<div className='form-row'>
    <label htmlFor='name' className='form-label'>name </label>
    <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-input'/>
</div>

<button type='submit' className='btn btn-primary' >Submit</button>
    </form> 
   {users.map((user)=>{
return <div key={user.index}>
  <h4>{user.name}</h4>
</div>
   })}
    </div>
  )
  
};

export default ControlledInputs