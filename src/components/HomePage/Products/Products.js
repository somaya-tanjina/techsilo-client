import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import './Products.css'


const Products = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://evening-citadel-22182.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    //const [products, setProducts] = useProducts([])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 10000);
},[])



    const handleNavigate = () => {
        navigate("/manageitems");
    }

  return (
      <div className="products_area my-5 ">
          {loading ? (
              <div>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="dark" />
              </div>
          ) : (
              <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="container"
              >
                  <h1 className="text-center service-header">Services</h1>
                  <div className="service-border mx-auto"></div>

                  <div className="row my-5">
                      {products.slice(0, 6).map((product) => (
                          <Product
                              key={product._id}
                              product={product}
                          ></Product>
                      ))}
                  </div>
                  <button
                      onClick={handleNavigate}
                      className="  d-block mx-auto my-5"
                  >
                      Manage Inventories
                  </button>
              </div>
          )}
      </div>
  );
};

export default Products;