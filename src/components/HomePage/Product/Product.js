import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
    const { _id,name, img, description, quantity, supplierName, price } = product;
    const navigate = useNavigate()

    const handleNavigate=(id) =>{
    navigate(`/inventory/${id}`)
    }
    return (
        <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="col-md-4 g-4 card-contain"
        >
            <div className="card h-100 border-0 ">
                <div className="img-area text-center">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="card-body  ">
                    <p className=" item-name">{name}</p>
                    <ul className="  text-center my-4 info">
                        <li>
                            <p>{description}</p>
                        </li>
                    </ul>
                    <p className=" item-name text-center ">
                        Supplier:
                        <span className="info "> {supplierName}</span>
                    </p>
                    <p className="item-name text-center">
                        Quantity: <span>{quantity}</span>
                    </p>
                    <p className="item-name text-center">
                        Price:<span> {price}</span>
                    </p>
                </div>

                <div className="card-footer bg-transparent border-0">
                    <button
                        className="d-block mx-auto btn btn-dark mb-3"
                        onClick={() => handleNavigate(_id)}
                    >
                        Stock Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
