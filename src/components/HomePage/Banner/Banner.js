import React from "react";
import background from "../../../images/wave.svg";
import heroImg from "../../../images/hero-img.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${background}) no-repeat center center`,
                maxWidth: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}
        >
            <div className="container my-5">
                <div className="banner-contain d-md-flex h-100 align-items-center justify-content-between ">
                    <div
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        data-aos-offset="300"
                        className="text-center"
                    >
                        <h1>
                            <div className="hero-heading">Smile More with</div>
                            <span className="hero-span">"TechSilo"</span>
                        </h1>
                        <p className="text-center hero-paragraph">
                            Get the best of Shopping and Entertainment with
                            Prime. Enjoy low prices and great deals.
                        </p>
                        <button className="hero-btn d-block mx-auto">
                            Get Started
                        </button>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="img_area mx-auto "
                    >
                        <img
                            className="  w-100"
                            src={heroImg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
