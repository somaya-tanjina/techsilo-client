import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";


const Products = () => {
  const [products, setProducts] = useProducts([])

  return (
      <div className="products_area">
          <div className="container">
              <h1>Products:{products.length}</h1>

              <div className="row">
                  {products.slice(0, 6).map((product) => (
                      <Product key={product._id} product={product}></Product>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Products;