export default function MyCart({ mycart }) {
  return (
    <div>
      <h2>My Cart</h2>
      <ol>
        {mycart.map(({ id, name, price }) => (
          <li key={id}>
            {name}: Rs {price}
          </li>
        ))}
      </ol>
      <p>
        Total price:
        {mycart.reduce((acc, curr) => (acc += curr.price), 0)}
      </p>
    </div>
  );
}
