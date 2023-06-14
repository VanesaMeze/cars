import { useEffect, useState } from "react";
import { deleteCarById, getCars } from "../service/carsService";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../store/car/slice";
import {
  deselectCar,
  deselectedAll,
  // removeCar,
  selectCar,
  selectedAll,
} from "../store/car/slice";
import { selectorCarValue, selectCounterValue } from "../store/car/selectors";

const AppCars = () => {
  // const [cars, setCars] = useState([]);
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [selectedCars, setSelectedCars] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortOrderMaxSpeed, setSortOrderMaxSpeed] = useState(null);

  useEffect(() => {
    getCars().then(({ data }) => dispatch(setCars(data)));
  }, []);

  const cars = useSelector(selectorCarValue);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Da li ste sigurni da želite obrisati automobil?"
    );
    if (shouldDelete) {
      deleteCarById(id);
      getCars().then(({ data }) => setCars(data));
    }
  };

  const handleSelect = (car) => {
    if (selectedCars.find((selectedCar) => selectedCar.id === car.id)) {
      return;
    }
    dispatch(selectCar());
    setSelectedCars((prevSelectedCars) => [...prevSelectedCars, car]);
  };

  const handleDeselect = (car) => {
    const updatedSelectedCars = selectedCars.filter(
      (selectedCar) => selectedCar.id !== car.id
    );
    setSelectedCars(updatedSelectedCars);
    dispatch(deselectCar());
  };

  const handleSelectAll = () => {
    setSelectedCars(cars);
    dispatch(selectedAll());
  };

  const handleDeselectAll = () => {
    setSelectedCars([]);
    dispatch(deselectedAll());
  };

  const sortCarsByBrand = () => {
    if (sortOrder === "asc") {
      const sortedCars = [...cars].sort((a, b) =>
        a.brand.localeCompare(b.brand)
      );
      dispatch(setCars(sortedCars));
      setSortOrder("desc");
    } else {
      const sortedCars = [...cars].sort((a, b) =>
        b.brand.localeCompare(a.brand)
      );
      dispatch(setCars(sortedCars));
      setSortOrder("asc");
    }
  };

  const sortCarsByMaxSpeed = () => {
    if (sortOrderMaxSpeed === "asc") {
      const sortedCars = [...cars].sort((a, b) => a.maxSpeed - b.maxSpeed);
      dispatch(setCars(sortedCars));
      setSortOrderMaxSpeed("desc");
    } else {
      const sortedCars = [...cars].sort((a, b) => b.maxSpeed - a.maxSpeed);
      dispatch(setCars(sortedCars));
      setSortOrderMaxSpeed("asc");
    }
  };

  return (
    <div className="cars">
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <div style={{ color: "white" }}>
          Search by brand:
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
            value={searchBrand}
            onChange={(e) => setSearchBrand(e.target.value)}
          />
          <br></br>
          Search by model:
          <input
            type="text"
            className="form-control"
            placeholder="Model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
          />{" "}
          <br></br>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={handleSelectAll}
        >
          Select All
        </button>{" "}
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={handleDeselectAll}
        >
          Deselect All
        </button>
      </div>
      <br></br> <hr></hr>
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <table
          className="table table-hover"
          style={{ width: "auto", textAlign: "center", color: "white" }}
        >
          <thead>
            <tr>
              <th>Model</th>
              <th>
                <button
                  className="btn btn-outline-light"
                  onClick={sortCarsByBrand}
                >
                  Brand
                </button>
              </th>
              <th>Year</th>
              <th>
                <button
                  className="btn btn-outline-light"
                  onClick={sortCarsByMaxSpeed}
                >
                  Max speed
                </button>
              </th>
              <th>Automatic</th>
              <th>Engine</th>
              <th>No of doors</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Select/Deselect</th>
            </tr>
          </thead>
          {cars.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="9">
                  Nema automobila koji zadovoljavaju kriterijume pretrage.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {cars.map((car, id) => (
                <tr key={id}>
                  <td>{car.model}</td>
                  <td>{car.brand}</td>
                  <td>{car.year}</td>
                  <td>{car.maxSpeed}</td>
                  <td>{car.is_automatic ? "Yes" : "No"}</td>
                  <td>{car.engine}</td>
                  <td>{car.numberOfDoors}</td>
                  <td>
                    <Link
                      to={`edit/${car.id}`}
                      className="btn btn-outline-light"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-light"
                      type="delete"
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {selectedCars.find(
                      (selectedCar) => selectedCar.id === car.id
                    ) ? (
                      <button
                        className="btn btn-secondary"
                        type="select"
                        onClick={() => handleDeselect(car)}
                      >
                        Deselect
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-info"
                        type="select"
                        onClick={() => handleSelect(car)}
                      >
                        Select
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h5>Ukupno selektovano automobila: {counterValue}</h5>
      </div>
    </div>
  );
};
export default AppCars;
