// in this ques firstly there is the border on the card and then we are turning it off , we have made a toggler so if we click again and again it will work
import { useState } from "react";

export default function EmployeeHighlight({ employees }) {
  const [initBorder, setInitBorder] = useState(true);

  const handleHighlight = () => {
    setInitBorder((initBorder) => !initBorder);
  };

  return (
    <div>
      <h2>EmployeeHighlight</h2>
      {employees.map(({ name, workExperience }) => (
        <li style={{ border: initBorder && "2px solid violet" }}>
          {name}, {workExperience} years
        </li>
      ))}

      <button onClick={handleHighlight}>Highlight </button>
    </div>
  );
}
