import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [addedItem, setAddedItem] = useState([]);

    useEffect(() => {
        const findAddedProducts = async () => {
            const email = user.email;
            const url = `https://evening-citadel-22182.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            });
            setAddedItem(data);
        };
        findAddedProducts();
    }, [user]);

    const handleDeleteItem = (id) => {
        const confirmDelete = window.confirm(" Sure to delete clicked item?");
        if (confirmDelete) {
            fetch(
                `https://evening-citadel-22182.herokuapp.com/inventory/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    const newAddedItem = addedItem.filter(
                        (item) => item._id !== id
                    );
                    setAddedItem(newAddedItem);
                    console.log(data);
                });
        }
    };

    return (
        <div className="container">
            <h3 className="fw-bold text-center mt-4 fs-1">
                My Added <span>Items</span>
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
                        {addedItem.map((item) => (
                            <tr>
                                <td>
                                    <p title={item.name}>
                                        {item.name.length > 20
                                            ? item.name.slice(0, 20) + "..."
                                            : item.name}
                                    </p>
                                </td>
                                <td>
                                    <div className="img-area">
                                        <img
                                            className="image"
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteItem(item._id)
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
    );
};

export default MyItems;
