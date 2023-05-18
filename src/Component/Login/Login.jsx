import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailField = form.email.value;
  };

  return (
    <div className="container mx-auto">
      <div style={{ height: "80vh" }}>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="flex flex-col justify-start items-start fullForm lg:w-2/6 md:w-3/6  shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#910000" }}>
              Please Login
            </h2>
            <input
              type="email"
              placeholder="palatable.world@gmail.com"
              className="border"
              name="email"
            />
            <div className="w-full relative">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="******"
                name="password"
              />
              <span
                onClick={() => setToggleIcon(!toggleIcon)}
                className="absolute bottom-4 right-4 toggle-icon"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block "
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}
              </span>
            </div>
            <p
              className="mb-3 text-end w-full forget-password"
            >
              Forget Password
            </p>
            {/* <span className="text-green-500 m-0">{successMassage}</span> */}
            {/* <span className="text-red-500 m-0">{errorMassage}</span> */}
            <p className="mb-2">
              Don't Have an Account?{" "}
              <Link
                style={{ color: "#910000", fontWeight: 700 }}
                to="/register"
              >
                Please Register
              </Link>
            </p>
            <input type="submit" value="Login" className="btn-primary" />
            <div className="pt-5 flex items-center justify-between w-full">
              <p>Or Sign in with:</p>
              <div className="flex items-center justify-between">
                <img
                //   onClick={handleGoogleLogin}
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #910000",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                //   src={googleImg}
                  alt=""
                />
                <img
                //   onClick={handleGithubLogin}
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #910000",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                //   src={gitHubImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
