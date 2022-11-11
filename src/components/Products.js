import { FiLoader } from "react-icons/fi";
import Product from "./Product";

const Products = ({
  isLoading,
  error,
  data,
  currencyFormatter,
  handleAddToCart,
}) => {
  return (
    <div className="mt-20 container mx-auto">
      {isLoading ? (
        <span className="loader">
          <FiLoader />
        </span>
      ) : error ? (
        <p className="error-message">Something went wrong</p>
      ) : (
        <>
          <h2 className="section-title uppercase text-center mb-10 text-3xl font-semibold tracking-widest">
            New Arrivals
          </h2>
          <div className="products-wrapper flex flex-wrap gap-10 justify-center">
            {data?.map((product) => (
              <Product
                key={product.id}
                product={product}
                currencyFormatter={currencyFormatter}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
