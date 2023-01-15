import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users/signup/", {
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        required
        className="form-control mb-3"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
