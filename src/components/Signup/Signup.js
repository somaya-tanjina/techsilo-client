import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;

        createUserWithEmailAndPassword(email, password);
    };
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
                </div>
            </div>
        </div>
    );
};

export default Signup;
