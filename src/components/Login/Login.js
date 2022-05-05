import React from "react";
import img from "../../images/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="email" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
