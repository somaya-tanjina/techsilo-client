import axios from "axios";
import React from "react";

const AddItem = () => {
    const handleAddItem = (event) => {
        event.preventDefault();
        const item = {
            name: event.target.name.value,
            supplierName: event.target.supplierName.value,
            img: event.target.img.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
        };

        axios.post("http://localhost:5000/additem", item).then((res) => {
            const { data } = res;
            console.log(data);
        });
    };

    return (
        <div className="container">
            <div className="d-md-flex  justify-content-md-center align-items-center h-100 border">
                <form onSubmit={handleAddItem}>
                    <h1 className="text-center mb-4 text-dark">
                        Add New Product
                    </h1>

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

                    <input className="mb-3" type="text" name="img" required />
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

                    <textarea id="story" name="description"></textarea>

                    <div className="button-container">
                        <input
                            className="  "
                            type="submit"
                            value="Add Product"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
