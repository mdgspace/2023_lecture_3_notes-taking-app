import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/users/signin/", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("username", resp.data);
      navigate("/");
      window.location.reload();
    } catch (error) {
      alert("some error occured");
    }
  };
  return (
    <form className="c-form bg-secondary p-3">
      <h3 className="mb-3">Login</h3>
      <input
        className="form-control mb-3"
        required
        type="text"
        placeholder="username"
        ref={usernameRef}
      />
      <input
        className="form-control mb-3"
        required
        type="password"
        placeholder="password"
        ref={passwordRef}
      />
      <button
        type="submit"
        className="btn btn-success w-100 mb-3"
        onClick={HandleSubmit}
      >
        Submit
      </button>
      Don't have a account?{" "}
      <Link className="text-dark" to={"/signup"}>
        Signup
      </Link>
    </form>
  );
};

export default Login;
