import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
function Signin() {
  const [showPassword, setShowpassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p>Welcome Back!</p>
        </header>
        <main>
          <form>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowpassword((prevState) => !prevState)}
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                {" "}
                <AiFillCaretRight
                  fill="#ffffff"
                  width="34px"
                  height="34px"
                />{" "}
              </button>
            </div>
          </form>

          {/* Google Auth */}

          <Link to="/sign-up" className="registerLink">
            Sign Up
          </Link>
        </main>
      </div>
    </>
  );
}

export default Signin;
