import React from "react";
import Banner from "./Banner/Banner";
import Clients from "./Clients/Clients";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Clients></Clients>
        </div>
    );
};

export default Home;
