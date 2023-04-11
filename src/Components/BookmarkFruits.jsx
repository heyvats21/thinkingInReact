import { useState } from "react";

export default function BookmarkFruits({ fruits }) {
  // at starting  shouldHighlight =false (black at init)
  const [shouldHighlight, setShouldHighlight] = useState(false);

  // after clicking on the button make it to true which means in style tag we have changed the funct.
  const handlerHighlight = () => {
    setShouldHighlight((shouldHighlight) => true);
  };

  const handlerReset = () => {
    setShouldHighlight(false);
  };

  // const handlerToggle = () => {
  //whatever is the value make it to the false
  //   setShouldHighlight((shouldHighlight) => !shouldHighlight);
  // };
  return (
    <div>
      <h2>Book Mark Fruits</h2>
      {fruits.map(({ name, price }) => (
        <li style={{ color: shouldHighlight && price > 30 && "orange" }}>
          {name}: INR {price}
        </li>
      ))}
      <button onClick={handlerHighlight}>Highlight Budget Fruits</button>
      <button onClick={handlerReset}>Reset</button>
      <button
        onClick={() =>
          setShouldHighlight((shouldHighlight) => !shouldHighlight)
        }
      >
        Toggler
      </button>
    </div>
  );
}
//its an call back function and we are make setShouldHighlight to false
// onClick={() => setShouldHighlight(false)}
