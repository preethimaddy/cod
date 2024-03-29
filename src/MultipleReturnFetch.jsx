import React from 'react'
import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturnFetch = () => {
     const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


        const fetchUser = async ()=>{
try{
    const resp = await fetch(url)
    if(!resp.ok){
    setIsError(true);
setIsLoading(false)
return;}
    const user = await resp.json();
    console.log(resp)
    setUser(user);
  
}
catch(error){
    setIsError(true)
    console.log(error);
}
setIsLoading(false)
};
useEffect(()=>{
    fetchUser();     
},[]);


    if(isLoading){
        return<h2>Loading..</h2>
    }
    if(isError){
        return<h2>There was an Error!!!</h2>
    }
    const {avatar_url, name, company, bio}=user;
 return <div>
    <img style={{width:'150px', borderRadius: '25px'} }src={avatar_url} alt={name}/>
    <h2>name</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
 </div>
}

export default MultipleReturnFetch