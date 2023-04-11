export default function EmployeeCard() {
  const changedesignationColor = { color: "red" };
  // const changeExpColor = { color: "blue" };
  // const changeFont = { fontSize: "28px" };
  return (
    <div>
      <h2>EmployeeCard</h2>
      <p style={changedesignationColor}>Designation:Software Engineer</p>
      <p>Name:Vatsal Singh</p>
      <p style={{ color: "blue", fontSize: "28px" }}>Experience:1 Year</p>
    </div>
  );
}
