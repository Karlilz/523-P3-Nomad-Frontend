<<<<<<< HEAD
// import React from 'react';
// import Nav from './Nav';

// const Header = () => {
//   return (
//     <div style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', fontSize: '35px', color: 'white', textTransform: 'uppercase', textAlign: 'left', padding: '0 20px'}}>
//       <h1>Nom@d</h1>
//       <Nav/>
//     </div>
//   );
// };
=======
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
>>>>>>> 22582ba (routes added to pages)

// export default Header;
