import React, { useState } from 'react';
import {Navigate} from "react-router-dom";

const LoginPage = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const [redirect,setRedirect] =useState(false);
    async function login(e){
        e.preventDefault();
<<<<<<< HEAD
       const response=  await fetch('http://localhost:4000/login',{
=======
       const response=  await fetch('http://localhost:3000/login',{
>>>>>>> 08139bd (added loginpage,signup,app.js)
            method:'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials: 'include',
        });
        if(response.ok){
            setRedirect(true);
        } else {
            alert('wrong password');
        }
    }

    if(redirect) {
        return <Navigate to ={'/'}/>
    }
     return (
   <form className ="login" onSubmit={login}>
    <h1>Login</h1>
    <input type = "text" placeholder ="username" 
    value = {username} 
    onChange= {e => setUsername(e.target.value)}/>
    <input type = "password" 
    placeholder="password" 
    value = {password} 
    onChange={e =>setPassword(e.target.value)}/>
    <button>Login</button>
   </form>
  )
}

export default LoginPage