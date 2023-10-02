import React, { useState } from 'react';
//import Nav from './Nav';
 import {Link} from "react-router-dom"

 const Header = () => {
  const [username,setUsername] = useState(null)
    useEffect(() =>{
      fetch('http://localhost:3000/profile',{
        credentials: 'include',
      }).then(response =>{
        response.json(). then(userInfo=> {
          setUsername(userInfo.username)
        })
      })
    })
    return (
      <header>
        <Link to= "/" className = "logo">Nom@d</Link> 
        <nav>
          <Link href = "/">Home</Link>
          {username && (
            <>
             <Link to = "/create">Add Post</Link>
             <a>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link href = "/login">Login</Link>
            <Link href = "/signup">SignUp</Link>
            </>
          )}
        </nav>
      </header>
    )
 }

// export default Header;
