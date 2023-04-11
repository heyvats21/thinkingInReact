export default function SumCard({ firstNumber, secondNumber }) {
  const headerStyle = { color: "green" };
  const paraStyle = { fontSize: "20px" };
  return (
    <div>
      <h2 style={headerStyle}>Sum Card</h2>
      <p style={paraStyle}>First Number:{firstNumber} </p>
      <p style={paraStyle}>Second Number:{secondNumber}</p>
      <p>Sum:{firstNumber + secondNumber}</p>
    </div>
  );
}
