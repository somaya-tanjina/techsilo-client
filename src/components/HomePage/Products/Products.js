import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";


const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts([])
    const handleNavigate = () => {
        navigate("/manageitems");
    }

  return (
      <div className="products_area">
          <div className="container">
              <h1>Products:{products.length}</h1>

              <div className="row">
                  {products.slice(0, 6).map((product) => (
                      <Product key={product._id} product={product}></Product>
                  ))}
              </div>
              <button onClick={handleNavigate} className="btn btn-outline-success d-block mx-auto my-4">Manage Inventories</button>
          </div>
      </div>
  );
};

export default Products;