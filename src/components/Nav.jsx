import React from "react";

const Nav = (props) => {
  return (
    <div className="nav">

      {/* <Link to="/"> */}
        <img src="/images/HomeIcon.png" alt="Home Icon" style={{ width: "50px", height: "50px", marginRight: "10px" }}/>
      {/* </Link> */}

      {/* <Link to="/"> */}
        {/* <img src="/images/SearchIcon.png" alt="Search Icon" style={{ width: "40px", height: "40px", marginRight: "10px" }}/> */}
      {/* </Link> */}

      {/* <Link to="/about"> */}
        <img src="/images/PostIcon.png" alt="Post Icon" style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
      {/* </Link> */}

      {/* <Link to="/profile"> */}
        <img src="/images/ProfileIcon.png" alt="Profile Icon" style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
      {/* </Link> */}

      {/* <Link to="/"> */}
        <img src="/images/LogoutIcon.png" alt="Logout Icon" style={{ width: "60px", height: "60px", marginRight: "10px" }}/>
      {/* </Link> */}
    </div>
  );
};

export default Nav;


