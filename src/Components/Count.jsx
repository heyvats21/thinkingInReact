import { useState } from "react";

export default function Count() {
  const [initCount, setInitCount] = useState(1);

  const handleClick = () => {
    console.log(
      "clicked",
      // Its an es6 way to show
      setInitCount((count) => count + 1)
    );
  };

  const decrementCount = () => {
    setInitCount((count) => count - 1);
  };

  const resetFunc = () => {
    // setInitCount((count) => 0);
    setInitCount(0);
  };
  return (
    <div>
      <h3>Count</h3>
      {/* calling a function {handleClick} */}
      <h2 onClick={handleClick}>{initCount}</h2>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetFunc}>Reset</button>
    </div>
  );
}

// onClick={() => console.log("clicked")}
// onClick={() => setInitCount((count) => count - 1)}
