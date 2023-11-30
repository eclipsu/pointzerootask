import Product from "./Products/Product";

function ProductList({ products }) {
  if (products == undefined) {
    return <div>404</div>;
  }
  return (
    <div>
      <h1>Our product List: 😻</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
