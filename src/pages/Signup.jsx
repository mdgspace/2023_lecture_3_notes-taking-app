import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  let username, password;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nanonish.pythonanywhere.com/users/signup/", {
        username: username,
        password: password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="c-form p-3 bg-secondary">
      <h3 className="mb-3">Signup Form</h3>
      <input
        className="form-control mb-3"
        required
        type="text"
        placeholder="username"
        onChange={(e) => (username = e.target.value)}
      />
      <input
        required
        className="form-control mb-3"
        type="password"
        placeholder="password"
        onChange={(e) => (password = e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary w-100 mb-3"
        onClick={HandleSubmit}
      >
        Submit
      </button>
      Already have a account?{" "}
      <Link className="text-dark" to={"/login"}>
        Login
      </Link>
    </form>
  );
};

export default Signup;
