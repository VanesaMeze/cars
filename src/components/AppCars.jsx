import { useState, useEffect } from "react";
import { deleteCarById, getCars } from "../service/carsService";
import { Link } from "react-router-dom";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(({ data }) => setCars(data));
  }, []);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Da li ste sigurni da želite obrisati automobil?"
    );
    if (shouldDelete) {
      deleteCarById(id);
      getCars().then(({ data }) => setCars(data));
    }
  };

  return (
    <div>
      {cars.map((car, id) => (
        <div className="cars" key={id}>
          <p>Model: {car.model}</p>
          <p>Brand: {car.brand}</p>
          <p>Year: {car.year}</p>
          <p>MaxSpeed: {car.maxSpeed}</p>
          <p>Automatic: {car.isAutomatic ? "Yes" : "No"}</p>
          <p>Engine: {car.engine}</p>
          <Link to={`edit/${car.id}`}>
            <button type="submit" className="btn btn-outline-light">
              Edit
            </button>
          </Link>{" "}
          {/* <Link to={`cars/${id}`}> */}
          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={() => handleDelete(car.id)}
          >
            Delete
          </button>
          {/* </Link>{" "} */}
          <br></br>
          <br></br>
          <hr className="hrC"></hr>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default AppCars;
