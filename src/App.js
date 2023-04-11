import AirConditioner from "./Components/AirConditioner";
import Count from "./Components/Count";
import { product, fruits, employees, mycart } from "./Components/data";
import EmployeeCard from "./Components/EmployeeCard";
import EmployeeList from "./Components/EmployeeList";
import Fruits from "./Components/Fruits";
import MyCart from "./Components/MyCart";
import SumCard from "./Components/SumCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <SumCard firstNumber={6} secondNumber={9} /> */}
      {/* <EmployeeCard /> */}
      {/* <AirConditioner product={product} /> */}
      {/* <Fruits fruits={fruits} /> */}
      {/* <EmployeeList employees={employees} /> */}
      {/* <MyCart mycart={mycart} /> */}
      <Count />
    </div>
  );
}
