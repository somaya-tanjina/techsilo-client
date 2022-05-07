import axios from "axios";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.pass.value;

        await signInWithEmailAndPassword(email, password);
        event.target.reset();
        const { data } = await axios.post("http://localhost:5000/login", {
            email,
        });
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
        console.log(data);
    };

    // if (user) {
    //navigate(from, { replace: true });
    // }

    if (error) {
        const displayError = <p className="text-danger">{error?.message}</p>;
        toast.dark(displayError);
    }

    //console.log(user);
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
