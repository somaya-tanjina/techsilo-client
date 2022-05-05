import React from "react";
import "./SocialLogin.css";
import google from "../../images/socila-icon/google.png";
import facebook from "../../images/socila-icon/facebook.png";
import github from "../../images/socila-icon/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center mt-4">
                <div className="border w-50"></div>
                <p className="mt-3 mx-2">OR</p>
                <div className="border w-50"></div>
            </div>
            <div>
                <button className="btn-google    btn btn-success  rounded-circle  mb-2">
                    <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button className=" btn btn-outline-primary rounded-circle   mb-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button className="btn btn-outline-dark btn-floating rounded-circle ">
                    <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
