import React from "react";
// import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav"  style={{color: "white", display:'flex', flexDirection:'row', justifyContent:'space-around',backgroundColor: 'black', height: '60px' }}>
    {/* <Link to="/" */}
      <img src="/images/HomeIcon.png" alt="Home Icon" style={{width:"60px", height:"60px"}} />
    {/* </Link> */}

    {/* <Link to="/" */}
      <img src="/images/SearchIcon.png" alt="Search Icon" style={{width:"60px", height:"60px"}} />
    {/* </Link> */}

    {/* <Link to="/about" */}
      <img src="/images/PostIcon.png" alt="Post Icon" style={{width:"45px", height:"45px"}} />
    {/* </Link> */}

    {/* <Link to="/profile" */}
      <img src="/images/ProfileIcon.png" alt="Profile Icon" style={{width:"60px", height:"60px"}}/>
    {/* </Link> */}
  </div>
  );
};

export default Nav;


