import React from "react";
import Banner from "./Banner/Banner";
import Clients from "./Clients/Clients";
import Newsletter from "./NewsLetter/Newsletter";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Clients></Clients>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
