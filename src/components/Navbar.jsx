import React from "react";
import mdg_logo from "../assests/images/mdg_logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-white p-3 ">
      <img alt="mdg-logo" src={mdg_logo} />
      <div>
        {localStorage.getItem("username")}
        <img
          alt="profile-avatar"
          src={"https://api.multiavatar.com/kathrin.svg"}
          className="profile-avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
