import {React, useReducer} from 'react'
import { data } from '../data'

///// Default state////////
const defaultState = {
    people:data,
};
const reducer = () =>{

}


const ReducerBasic = () => {

   const[state, dispatch] = useReducer(reducer, defaultState)
    // const [people, setPeople] = useState(data)

    const removeItem =(id) =>{
        //Reducer Functionality
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople)
 
    };

    const clearList = () =>{
        // setPeople([]);
   
    }


    const resetList = () =>{
        // setPeople(data);
    
    }
 console.log(state);
  return (
    <div>
{state.people.map((person)=>{
    const {id, name} = person;
    return (
        <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    )
})}
{state.people.length <1 ? (<button className='btn' style={{marginTop:'2rem'}} onClick={resetList}>Reset</button>
):(
<button className='btn' style={{marginTop:'2rem'}} onClick={clearList}>Clear</button>) 
}

    </div>

  )
}

export default ReducerBasic