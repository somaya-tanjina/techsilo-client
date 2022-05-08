import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="container d-md-flex text-center  mt-5 d-block mx-auto justify-content-evenly align-items-center h-100 ">
                <p>
                    &#169; Copyright <span>Tech-Sillo</span>. All Rights
                    Reserved.
                    <br />
                </p>
                <div className="mx-auto d-block">
                    <div>
                        <button className="btn-google    btn btn-outline-success  rounded-circle me-2  mb-2">
                            <a href="https://www.google.com/">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </button>
                        <button className=" btn btn-outline-primary rounded-circle me-2  mb-2">
                            <a href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </button>
                        <button className="btn btn-outline-dark btn-floating rounded-circle mb-2 ">
                            <a href="https://github.com/">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
