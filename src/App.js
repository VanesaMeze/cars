import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppCars from "./components/AppCars";
// import { API } from "./shared/api";
import Add from "./pages/Add";
import Home from "./pages/Home";

function App() {
  // API.get("/Messages/greet").then((response) => console.log(response));
  // API.get("/cars").then(({ data }) => console.log(data));

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="cars" element={<AppCars />}></Route>
      <Route path="addCar" element={<Add />}></Route>
    </Routes>
  );
}

export default App;
