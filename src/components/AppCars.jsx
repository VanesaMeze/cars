import { useState, useEffect } from "react";
import { getCars } from "../service/carsService";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(({ data }) => setCars(data));
  }, []);
  //   postCars("Mercedes", "AMG", 2021, )
  return (
    <div>
      {cars.map((car, id) => (
        <div>
          <p>Model: {car.model}</p>
          <p>Brand: {car.brand}</p>
          <p>Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
};

export default AppCars;
