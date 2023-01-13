import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users/signup/", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
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
        ref={usernameRef}
      />
      <input
        required
        className="form-control mb-3"
        type="password"
        placeholder="password"
        ref={passwordRef}
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
