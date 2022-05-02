import React from "react";
import "./SocialLogin.css";
import google from "../../images/socila-icon/google.png";
import facebook from "../../images/socila-icon/facebook.png";
import github from "../../images/socila-icon/github.png";

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center mt-4">
                <div className="border w-50"></div>
                <p className="mt-3 mx-2">OR</p>
                <div className="border w-50"></div>
            </div>
            <div>
                <button className="btn-google btn btn-outline-success border-0 w-100 mb-2">
                    <img style={{ width: "30px" }} src={google} alt="" />
                    Continue With Google
                </button>
                <button className=" btn btn-outline-primary border-0 w-100 mb-2">
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    Continue With Facebook
                </button>
                <button className="btn btn-outline-dark border-0 w-100">
                    <img
                        className="bg-light rounded"
                        style={{ width: "30px" }}
                        src={github}
                        alt=""
                    />
                    Continue With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
