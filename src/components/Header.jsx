import React from 'react';
import Nav from './Nav';
 import {Link} from "react-router-dom"

 const Header = () => {
      <header>
        <Link to= "/" className = "logo">Nom@d</Link> 
        <nav>
          <Link href = "">Home</Link>
          <Link href = "/login">Login</Link>
          <Link href = "/signup">SignUp</Link>
        </nav>
      </header>
 }

export default Header;
