import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProductDetails from "../Hooks/useProductDetails";

const InventoryDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductDetails(id);
    console.log(product);
    const { img, _id, description, name, price, supplierName, quantity } =
        product;
    console.log(_id);
    const emailRef = useRef("");
    const navigate = useNavigate();

    const [isReload, setIsReload] = useState(false);

    const handleNavigate = () => {
        navigate("/manageitems");
    };

    const handleDecreaseQuantity = (id) => {
        const newQuantity = quantity - 1;
        const newProduct = { ...product, quantity: newQuantity };
        setProduct(newProduct);

        // send to server
        fetch(`https://evening-citadel-22182.herokuapp.com/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsReload(!isReload);
                console.log(data);
                toast.dark("Successfully updated");
            });
    };

    const handleincreaseQuantity = () => {
        const newQuantity =
            parseInt(quantity) + parseInt(emailRef.current.value);

        const newProduct = { ...product, quantity: newQuantity };
        setProduct(newProduct);
        console.log(newProduct);
        setIsReload(!isReload);
        // send to server

        console.log(id);
        fetch(`https://evening-citadel-22182.herokuapp.com/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsReload(!isReload);
                console.log(data);
                toast.dark("Successfully quantity increased");
            });
    };
    return (
        <div className="container">
            <div className=" d-md-flex justify-content-evenly align-items-center border my-3 ">
                <div>
                    <img src={img} className=" w-100" alt="..." />
                </div>
                <div className="mx-2 my-3">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p> Supplier: {supplierName}</p>
                    <h6>
                        <span>Id:</span> {_id}
                    </h6>
                    <div>
                        <p> Price: $ {price}</p>

                        {quantity === 0 ? (
                            <button className="btn btn-danger mb-3">
                                Sold
                            </button>
                        ) : (
                            <h6 className="mb-3">Quantity: {quantity}</h6>
                        )}
                    </div>
                    <div className="mx-auto">
                        <button
                            className="me-3 mb-3"
                            onClick={() => handleDecreaseQuantity(_id)}
                        >
                            Delivered
                        </button>
                        <button onClick={handleNavigate}>
                            Manage Inventories
                        </button>
                    </div>
                    <div>
                        <h3 className="mt-5 mb-3 text-center">
                            Restock <span>Laptops</span>
                        </h3>
                        <input
                            className=" mb-3"
                            ref={emailRef}
                            type="number"
                            id="quantity"
                            placeholder="quantity"
                            required
                        />
                        <button onClick={() => handleincreaseQuantity()}>
                            Increase Qantity
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;
