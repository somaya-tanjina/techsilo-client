import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../images/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.pass.value;

        signInWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate(from, { replace: true });
    }


    console.log(user);
    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleFormSubmit}>
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
