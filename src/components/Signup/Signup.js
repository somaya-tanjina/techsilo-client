import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
const Signup = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;

        createUserWithEmailAndPassword(email, password);
        toast("Please verify your email")
    };

    if (user) {
        navigate("/home");
    }
    console.log(user);

    return (
        <div className="container">
            <div className="d-md-flex  justify-content-md-center align-items-center h-100 border  ">
                <div className="login-img">
                    {/* <img className="login-img" src={img} alt="" /> */}
                </div>

                <div className="form py-5  ">
                    <form onSubmit={handleFormSubmit}>
                        <h1 className="text-center mb-4 text-dark">Sign Up</h1>

                        <input
                            className="w-100 mb-3"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="w-100 mb-3"
                            type="text"
                            name="email"
                            placeholder=" Email"
                            required
                        />

                        <input
                            className="w-100"
                            type="password"
                            name="pass"
                            placeholder="Password"
                            required
                        />

                        <div className="button-container">
                            <input
                                className="w-100"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Signup;
