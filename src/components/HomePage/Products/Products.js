import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";


const Products = () => {
  const [products, setProducts] = useProducts([])

  return (
      <div>
          <h1>Products:{products.length}</h1>

          {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
          ))}
      </div>
  );
};

export default Products;