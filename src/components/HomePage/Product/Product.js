import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
    const { _id,name, img } = product;
    const navigate = useNavigate()

    const handleNavigate=(id) =>{
    navigate(`/inventory/${id}`)
    }
    return (
        <div className="col-md-4 g-4">
            <div className="card h-100">
                <div className="img-area text-center">
                    <img className="w-100" src={img} alt="" />
                </div>
                <h6 className="text-center">{name}</h6>

                <button onClick={()=>handleNavigate(_id)}>Stock Update</button>
            </div>
        </div>
    );
};

export default Product;
