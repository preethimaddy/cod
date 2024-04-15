import {React, useReducer} from 'react'
import { data } from '../data'

///// Default state////////
const defaultState = {
    people:data,
    isLoading:false,
};

const CLEAR_LIST='CLEAR_LIST'
const RESET_LIST='RESET_LIST'
const REMOVE_ITEM='REMOVE_ITEM'
const reducer = (state, action) =>{
    if (action.type ===  CLEAR_LIST){
    return {...state, people: []}
    }
    if (action.type ===  RESET_LIST){
        return {...state, people: data}
        }
        if (action.type ===  REMOVE_ITEM){
            let newPeople = state.people.filter((person) => person.id !== action.payload.id);
            return {...state,people:newPeople}
            }
        //return state//
    throw new Error(`No Matching "${action.type}" - action type`) 
    }



const ReducerBasic = () => {
//You wanna dispatch something called an 'action' , "Action" gonna be handled in "Reducer" ///
   const[state, dispatch] = useReducer(reducer, defaultState)
  
  
   // const [people, setPeople] = useState(data)

    const removeItem =(id) =>{
       dispatch({type:REMOVE_ITEM,payload:{id}})
       
        //Reducer Functionality
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople)
 
    };

    const clearList = () =>{
        dispatch({ type: CLEAR_LIST})
        // setPeople([]);
   
    }


    const resetList = () =>{ 
        dispatch({ type: RESET_LIST})
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