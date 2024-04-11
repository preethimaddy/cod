import React from 'react'

const UserContainer = ({user, logout }) => {
  return (
  <div className='user-container'>
   { user ? (
   <>
    <p>Hello There, {user?.name?.toUpperCase()}</p>

    <button  onClick={logout} className='btn btn-primary'>
  Logout
    </button>
   </>
   ) : (
<p> Please Login!!</p>
   )}
  </div>
  );
}

export default UserContainer