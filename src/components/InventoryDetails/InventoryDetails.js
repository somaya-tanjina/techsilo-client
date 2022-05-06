import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../Hooks/useProductDetails";

const InventoryDetails = () => {
    const { id } = useParams();
    const [product] = useProductDetails(id);
    console.log(product);
    const { img, _id, description, name, price, supplierName, quantity } =
        product;
    console.log(_id);
    return (
        <div>
            <h1>hello</h1>
            <div >
                <p></p>

                <div className="card" >
                    <img src={img} className="card-img-top w-50" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p clclassNameass="card-text">
                            <p>{description}</p>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;
