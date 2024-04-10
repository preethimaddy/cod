import {useState,React} from 'react'

const FormDataApi = () => {
    const[value, setValue] = useState(0);

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget);
        // console.log(formData);
        // const email = formData.get('email');
        // console.log([...formData.entries()]);
        const newUser= Object.fromEntries(formData);
        console.log(newUser);
        setValue(value+1);
        e.currentTarget.reset();
        
    }
  return (
    <><div>
    <form className='form'>
  
        <div className='form-row' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' id='name'  name='name' className='form-input' />
        </div>
        <div className='form-row'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' id='email' name='email' className='form-input' />
        </div>
        <div className='form-row'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' id='password'  name='password' className='form-input' />
        </div>
        <button type='submit'  className='btn btn-primary' onSubmit={handleSubmit}>Submit</button>
    </form>

</div></>
  )
}

export default FormDataApi