import React from "react";
import { Table } from "react-bootstrap";
import useProducts from "../Hooks/useProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './ManageItems.css'
import { Link } from "react-router-dom";
const ManageItems = () => {
    const [products, setProducts] = useProducts([]);

    console.log(products);


    const handleDeleteItem = (id) => {
        const confirmDelete = window.confirm(" Sure to delete clicked item?")
        if (confirmDelete) {
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const newProducts = products.filter(product => product._id !== id);
                    setProducts(newProducts)
                console.log(data);
            })
        }
    }

    return (
        <div className="container">
            <div>
                <h3 className="mt-5 text-center">
                    Available <span>Product</span>
                </h3>
                <Link to={"/additem"}>
                    <button className="add-btn">Add New Product</button>
                </Link>
                <div className="mt-5">
                    <Table size="sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <p>Name</p>
                                </th>
                                <th>
                                    <p>Image</p>
                                </th>
                                <th>
                                    <p>Quantity</p>
                                </th>
                                <th>
                                    <p>Operation</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr>
                                    <td>
                                        <p title={product.name}>
                                            {product.name.length>20
                                                ? product.name.slice(0, 20) +
                                                  "..."
                                                : product.name}
                                            
                                        </p>
                                    </td>
                                    <td>
                                        <div className="img-area">
                                            <img
                                                className="image"
                                                src={product.img}
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDeleteItem(product._id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
