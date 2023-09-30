import React from 'react';
import { Form, Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Nom@d</h1>
      <h2>Create Account</h2>
      <Form>
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="email" placeholder="Email"/>
        <input type="text" name="password" placeholder="Password"/>
      </Form>

      <Link to="/signup">
        <button>Create Account</button>
      </Link>

      <Link to="/login">
        <h2>Already Have an Account?</h2>
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default Welcome;


// {/* // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const Home = () => { */} */}
// {/* {/* //   // State to store user input
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //   });

// //   // Handle form input changes
// //   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission (you can define the submission logic here)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here, such as sending data to a server
//   };

//   return (
//     <div>
//       <h1>Nom@d</h1>
//       <h2>Create Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Create Account</button>
//       </form>

//       <Link to="/login">
//         <h2>Already Have an Account?</h2>
//         <button>Sign In</button>
//       </Link>
//     </div>
//   );
// };

// export default Home; */}

