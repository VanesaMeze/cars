import { useState, useEffect } from "react";
import { getCars } from "../service/carsService";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(({ data }) => setCars(data));
  }, []);

  return (
    <div>
      {cars.map((car, id) => (
        <div className="cars" key={id}>
          <p>Model: {car.model}</p>
          <p>Brand: {car.brand}</p>
          <p>Year: {car.year}</p>
          <hr className="hrC"></hr>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default AppCars;
