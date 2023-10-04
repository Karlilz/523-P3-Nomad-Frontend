import React, { useState } from 'react'

const SignUpPage = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    async function signUp(e){
        e.preventDefault();
           const response = await fetch('http://localhost:3000/signup',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type': 'application/json'},
        });
    if(response.status === 200){
        alert('Sign up Success!');
    } else {
        alert('Sign up Failed!');
     }
}

  return (
    <form className ="signUp" onSubmit ={signUp}>
        <h1>Sign Up</h1>
        <input type ="text" placeholder="Username" value = {username} 
        onChange={e =>setUsername(e.target.value)}/>
        <input type ="password" placeholder = "password" value={password}
        onChange={e =>setPassword(e.target.value)}/>
        <button>Sign Up</button> 
    </form>
  )
}

export default SignUpPage