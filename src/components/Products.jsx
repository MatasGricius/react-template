import Product from "./Product";

function Products({ products }) {
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
