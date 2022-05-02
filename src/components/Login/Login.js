import React from "react";
import img from "../../images/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="d-md-flex  justify-content-md-center align-items-center h-100 border  ">
                <div className="login-img">
                    <img className="login-img" src={img} alt="" />
                </div>

                <div className="form py-5  ">
                    <form>
                        <h1 className="text-center mb-4 text-dark">
                            Please Login
                        </h1>

                        <input
                            className="w-100 mb-3"
                            type="text"
                            name="uname"
                            placeholder="Your name"
                            required
                        />

                        <input
                            className="w-100"
                            type="password"
                            name="pass"
                            placeholder="password"
                            required
                        />

                        <div className="button-container">
                            <input
                                className="w-100"
                                type="submit"
                                value="Log In"
                            />
                        </div>
                    </form>
                    <div className=" mt-4">
                        <p>
                            <span>Forget Password?</span>
                        </p>
                        <p>
                            Don't have an account? <span>Sign Up</span>
                        </p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
