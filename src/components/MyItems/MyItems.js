import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [addedItem, setAddedItem] = useState([])


  useEffect(() => {
    const findAddedProducts = async () => {
      const email = user.email;
        const url = `http://localhost:5000/products?email=${email}`;
        const { data } = await axios.get(url);
        setAddedItem(data);
    };
findAddedProducts()
  },[user])

  return (
      <div className='container'>
          <h1>My Added Items:{addedItem.length}</h1>
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
                      {addedItem.map((product) => (
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
                                  <button

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