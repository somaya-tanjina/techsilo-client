import React from "react";
import "./Product.css";

const Product = ({ product }) => {
    const { name, img } = product;
    return (
        <div className="col-md-4 g-4">
            <div className="card h-100">
                <div className="img-area text-center">
                    <img className="w-100"  src={img} alt="" />
                </div>
                <h6 className="text-center">{name}</h6>
            </div>
        </div>
    );
};

export default Product;
