import { useState } from "react";

export default function FruitsBookmark({ fruits }) {
  const [shouldHighlight, setShouldHighlight] = useState("orange");

  const handleHighlight = () => {
    setShouldHighlight("black");
  };
  return (
    <div>
      <h2>FruitsBookmark</h2>
      {fruits.map(({ name, price }) => (
        <li style={{ color: shouldHighlight }}>
          {name}: INR {price}
        </li>
      ))}
      <button onClick={handleHighlight}>Highlight Costly Fruits</button>
    </div>
  );
}
