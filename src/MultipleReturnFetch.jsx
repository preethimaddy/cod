import React from 'react'
import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturnFetch = () => {
     const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const fetchUser = async ()=>{
try{
    const resp = await fetch(url)
    const user = await resp.json();
    setUser(user);
  
}
catch(error){
    setIsError(true)
    console.log(error);
}
setIsLoading(false)
};
  fetchUser()     
    },[]);
    if(isLoading){
        return<h2>Loading..</h2>
    }
    if(isError){
        return<h2>There was an Error!!!</h2>
    }
 return <div>
    <img style={{width:'150px', borderRadius: '25px'} }src={user.avatar_url} alt={user.name}/>
    <h2>user.name</h2>
    <h4>works at {user.company}</h4>
    <p>{user.bio}</p>
 </div>
}

export default MultipleReturnFetch