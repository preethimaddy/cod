import {useState} from 'react'
import {data} from '../data'
import List from './List'
const Count = () => {
    const[people, setPeople] = useState(data)
    const[count, setCount] =useState(0)
  return (
    <>
    <section>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}
        style={{marginBottom:'1rem'}}>
count {count}
        </button>
        <List people={people}/>
    </section>
    
    
    
    </>
  )
}

export default Count