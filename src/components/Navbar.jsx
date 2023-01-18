import React from "react";
import { Link } from "react-router-dom";
import mdg_logo from "../assests/images/mdg_logo.svg";

const Navbar = () => {
  const logout = () => {
    localStorage.setItem("username", "");
    window.location.reload();
  };
  const userNameFromLocalStorage =localStorage.getItem("username")
  return (
    <div className="navbar bg-white p-3 ">
      <Link to="/">
        <img alt="mdg-logo" src={mdg_logo} />
      </Link>
      {userNameFromLocalStorage && (
        <div>
          {userNameFromLocalStorage}
          <img
            alt="profile-avatar"
            src={"https://api.multiavatar.com/kathrin.svg"}
            className="profile-avatar"
          />
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
