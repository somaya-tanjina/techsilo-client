import axios from "axios";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
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
        const { data } = await axios.post(
            "https://evening-citadel-22182.herokuapp.com/login",
            {
                email,
            }
        );
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
        console.log(data);
    };

    if (loading) {
        return <Loading></Loading>;
    }
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
            <div className="d-flex mt-5 d-block mx-auto justify-content-center align-items-center h-100   ">
                <div className="form py-4">
                    <form onSubmit={handleFormSubmit}>
                        <h3 className="text-center mb-4 fw-bolder fs-1">
                            Please <span>Log In</span>
                        </h3>
                        <label>Username </label>
                        <input type="text" name="email" required />

                        <label>Password </label>
                        <input type="password" name="pass" required />

                        <button className="mt-4 d-block mx-auto">Submit</button>
                    </form>

                    <div className=" mt-4">
                        <p>
                            <span>Forget Password?</span>
                        </p>
                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/signup")}>
                                Sign Up
                            </span>
                        </p>
                    </div>

                    <div className="text-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;
