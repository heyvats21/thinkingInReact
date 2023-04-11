export default function EmployeeList({ employees }) {
  return (
    <div>
      <h2>EmployeeList</h2>
      {employees.map(({ name, workExperience }) => (
        <li style={{ border: workExperience > 5 ? "2px solid orange" : "" }}>
          {name}:{workExperience}
        </li>
      ))}
    </div>
  );
}
