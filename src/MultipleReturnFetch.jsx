import React from 'react'
import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturnFetch = () => {
    const [user, setUser] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(null);

    useEffect(()=>{
        const fetchUser = async ()=>{
try{
    const resp = await fetch(url)
    const user = await resp.json();
    console.log(user);
}
catch(error){
    console.log(error);
}
};
  fetchUser()     
    },[])
    return <h3>fetchdata</h3>
    // if(isLoading){
    //     return<h2>Loading..</h2>
    // }
    // if(isError){
    //     return<h2>Fetch Data</h2>
    // }

}

export default MultipleReturnFetch