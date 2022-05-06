import React from "react";
import { Table } from "react-bootstrap";
import useProducts from "../Hooks/useProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './ManageItems.css'
const ManageItems = () => {
    const [products] = useProducts([]);
    const { name, img, quqntity } = products;
    console.log(products);


    return (
        <div className="container">
            <div>
                <h3 className="mt-5 text-center">
                    Available <span>Product</span>
                </h3>

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
                                            {product.name.slice(0, 20)}...
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
                                        <button className="btn btn-danger">
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
