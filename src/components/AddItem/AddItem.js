import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddItem = () => {
    const handleAddItem = (event) => {
        event.preventDefault();
        const item = {
            name: event.target.name.value,
            supplierName: event.target.supplierName.value,
            img: event.target.img.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            email: event.target.email.value,
        };

        axios
            .post("https://evening-citadel-22182.herokuapp.com/additem", item)
            .then((res) => {
                const { data } = res;
                console.log(data);
                if (data.insertedId) {
                    toast.dark("Successfully product added");
                    event.target.reset();
                }
            });
    };

    return (
        <div className="container">
            <div className="d-flex mt-4 justify-content-center align-items-center h-100  ">
                <div className="form py-5">
                    <form onSubmit={handleAddItem}>
                        <h3 className="text-center mb-4 fw-bold fs-1 ">
                            Add New <span>Product</span>
                        </h3>

                        <input
                            className="   mb-3"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="   mb-3"
                            type="text"
                            name="supplierName"
                            placeholder="supplierName"
                            required
                        />

                        <input
                            className="mb-3"
                            type="text"
                            name="img"
                            required
                        />
                        <input
                            className="mb-3"
                            type="number"
                            name="price"
                            placeholder="price"
                            required
                        />
                        <input
                            className=" mb-3"
                            type="number"
                            name="quantity"
                            placeholder="quantity"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="mb-3"
                        />

                        <textarea
                            className="w-100"
                            id="story"
                            name="description"
                        ></textarea>

                        <div className="button-container">
                            <button className="mt-4">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
