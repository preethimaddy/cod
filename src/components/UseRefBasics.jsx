import {React,useState,useEffect,useRef} from 'react'

const UseRefBasics = () => {
    const[value, setValue] = useState(0);
    const refContainer = useRef(null);
    console.log(refContainer);

    useEffect(()=>{
        console.log(refContainer);
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = refContainer.current.value;
        console.log(name)
    }
  return (
  <>
  <form className='form' onSubmit={handleSubmit}>
              <h4>UseRef Basic</h4>

              <div className='form-row'>
                  <label htmlFor='name' className='form-label'>Name</label>
                  <input type='text' ref={refContainer} id='name'name='name'className='form-input' />
              </div>
           
              <button type='submit'  onSubmit={handleSubmit} className='btn btn-primary'>Submit</button>
          </form>
          <h2>Value:{value}</h2>
          <button onClick={()=> setValue(value+1)} className='btn'>Increase</button>
  </>
    
  )
}

export default UseRefBasics