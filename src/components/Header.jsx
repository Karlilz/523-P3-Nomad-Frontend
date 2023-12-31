import React, { useState, useEffect } from 'react';
//import Nav from './Nav';
 import {Link} from "react-router-dom"

 const Header = () => {
  const [username,setUsername] = useState(null)
    useEffect(() =>{
      fetch('http://localhost:3000/profile',{
        credentials: 'include',
      }).then(response =>{
        response.json().then(userInfo=> {
          setUsername(userInfo.username)
        })
      })
    })
 
    function logout(){
      fetch('http://localhost:3000/logout', {
        credentials: 'include',
        method: 'POST',
      });
      setUsername(null);
    }
    return (
      <header>
        <Link to= "/" className = "logo">Nom@d</Link> 
        <nav>
          {username && (
            <>
            <Link to = "/profile">Profile</Link>
             <Link to = "/create">Add Post</Link>
             <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link to = "/login">Login</Link>
            <Link to = "/signup">SignUp</Link>
            </>
          )}
        </nav>
      </header>
    )
 }

export default Header;
