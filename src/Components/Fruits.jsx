export default function Fruits({ fruits }) {
  const priceColor = { color: fruits.price < 50 ? "red" : "black" };

  return (
    <div>
      <h2>Fruits</h2>
      {fruits.map(({ name, price }) => (
        <li style={priceColor}>
          {name}: INR {price}
        </li>
      ))}
    </div>
  );
}
