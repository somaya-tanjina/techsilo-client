import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";
import './Products.css'


const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts([])
    const handleNavigate = () => {
        navigate("/manageitems");
    }

  return (
      <div className="products_area ">
          <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="container"
          >
              <h1 className="text-center service-header">Services</h1>
              <div className="service-border mx-auto"></div>

              <div className="row">
                  {products.slice(0, 6).map((product) => (
                      <Product key={product._id} product={product}></Product>
                  ))}
              </div>
              <button
                  onClick={handleNavigate}
                  className="btn btn-outline-success d-block mx-auto my-4"
              >
                  Manage Inventories
              </button>
          </div>
      </div>
  );
};

export default Products;