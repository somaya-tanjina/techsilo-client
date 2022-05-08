import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/scrollbar";

import "./Clients.css";
import client1 from "../../../images/clients/sucuri.svg";
import client2 from "../../../images/clients/eukhost.svg";
import client3 from "../../../images/clients/client-7.png";
import client4 from "../../../images/clients/hso.svg";


const Clients = () => {
    return (
        <div className="mt-5">
            <div className="container my-5">
                <div
                    className="my-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <h1 className=" hero-heading text-center  ">
                        Our <span>Trusty Clients</span>
                    </h1>
                    <div className="service-border mx-auto"></div>
                    <h5 className="text-muted text-center my-4">
                        Tech Silo is dealt with our trusty client within 5 year
                    </h5>
                </div>
                <div>
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={true}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="d-flex w-50 justify-content-center align-items-center mx-5 text-center my-5 ">
                                <img
                                    className="text-center w-100 mx-auto"
                                    style={{ height: "100px" }}
                                    src={client1}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex w-75 justify-content-center align-items-center mx-5 text-center my-5">
                                <img
                                    className="text-center w-100 mx-auto"
                                    style={{ height: "100px" }}
                                    src={client2}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex w-75 justify-content-center align-items-center mx-5 text-center my-5 ">
                                <img
                                    className="text-center w-75 mx-auto"
                                    style={{ height: "100px" }}
                                    src={client3}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex  w-75 justify-content-center align-items-center mx-5 text-center my-5">
                                <img
                                    className="text-center w-100  mx-auto"
                                    style={{ height: "100px" }}
                                    src={client4}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Clients;
