import React, { useState } from "react";
import logo from "../../assets/logo.png";
import axios from "../../axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const InputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const user = { Email: input.email, Password: input.password }
    try {
      if (user) {
        const res = await axios.post("/login/login", user);
        console.log(res.data);
        navigate("/")
      }
    } catch (error) {
      console.log("error form content", error)
    }
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className="vh-100 " style={{ backgroundImage: "linear-gradient(blue,white)" }}>
      <div className="wrapper mt-0" >
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text-center mt-4 name">
          Sponsor Spot
        </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="email" value={input.email} onChange={InputHandler} id="userName" placeholder="Email" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" value={input.password} onChange={InputHandler} id="pwd" placeholder="Password" />
          </div>
          <button onClick={SubmitHandler} className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          <Link to="/">Forget password?</Link> <br /> <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
