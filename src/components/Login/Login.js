import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        event.target.reset();
    };

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        const displayError = <p className="text-danger">{error?.message}</p>;
        toast.dark(displayError);
    }

    console.log(user);
    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleFormSubmit}>
                    <label>Username </label>
                    <input type="text" name="email" required />

                    <label>Password </label>
                    <input type="password" name="pass" required />

                    <div className="button-container">
                        <input type="submit" />
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

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
