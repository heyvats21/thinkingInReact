export default function AirConditioner({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price:{product.price}</p>
      <p>Specification:{product.specification}</p>
      <p>Warranty:{product.warranty}</p>
    </div>
  );
}
