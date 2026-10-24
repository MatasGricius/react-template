function Product({ product }) {
  const { id, title, price, onsale } = product;
  return (
    <div className="user-card border p-2 bg-amber-50" key={id}>
      <h1>{title}</h1>
      <p>{price}</p>
      <p className={onsale ? "onSale" : "soldOut"}>
        {onsale ? "SALE!" : "SOLD OUT"}
      </p>
    </div>
  );
}

export default Product;
