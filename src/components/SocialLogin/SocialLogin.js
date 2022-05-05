import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // Google Sign
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

// GitHub Sign in
const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

// Facebook Sign in
    const [signInWithFacebook, user2, loading2, error2] =
        useSignInWithFacebook(auth);

    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex align-items-center mt-4">
                <div className="border w-50"></div>
                <p className="mt-3 mx-2">OR</p>
                <div className="border w-50"></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn-google    btn btn-success  rounded-circle  mb-2"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button
                    onClick={() => signInWithFacebook()}
                    className=" btn btn-outline-primary rounded-circle   mb-2"
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-outline-dark btn-floating rounded-circle "
                >
                    <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
