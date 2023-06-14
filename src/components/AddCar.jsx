import { useState, useEffect } from "react";
import { editCarById, postCars } from "../service/carsService";
import { Link, useNavigate } from "react-router-dom";
import Preview from "./Preview";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCarById } from "../service/carsService";

let years = [];

for (let i = 1990; i <= 2018; i++) {
  years.push(i);
}

const AddCar = () => {
  const navigate = useNavigate();
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [cars, setCars] = useState({
    brand: "",
    model: "",
    year: "",
    max_speed: 0,
    is_automatic: isAutomatic,
    engine: "",
    number_of_doors: 0,
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCarById(id).then(({ data }) => {
        setCars(data);
        console.log(data);
      });
    }
  }, [id]);

  const handleChecked = () => {
    setIsAutomatic(!isAutomatic);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCars((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cars.engine.length === 0) {
      return alert(`Polje Engine ne moze biti prazno`);
    }
    if (cars.year.length === 0) {
      return alert(`Polje Year ne moze biti prazno`);
    }
    if (cars.number_of_doors === 0) {
      return alert(`Polje Number of doors ne moze biti prazno`);
    }
    if (cars.brand.length < 2) {
      return alert(`Polje Brand mora imati minimum 2 karaktera`);
    }
    if (cars.model.length < 2) {
      return alert(`Polje Model mora imati minimum 2 karaktera`);
    }

    postCars(
      cars.brand,
      cars.model,
      parseInt(cars.year),
      cars.max_speed,
      isAutomatic,
      cars.engine,
      cars.number_of_doors
    );
    if (id) {
      editCarById(id, cars);
    } else {
      setCars({
        brand: "",
        model: "",
        year: "",
        max_speed: 0,
        is_automatic: isAutomatic,
        engine: "",
        number_of_doors: 0,
      });
    }
    navigate("/");
  };

  const handleReset = () => {
    setCars({
      brand: "",
      model: "",
      year: 0,
      max_speed: 0,
      is_automatic: isAutomatic,
      engine: "",
      number_of_doors: 0,
    });
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const hidePreview = () => {
    setShowPreview(false);
  };

  return (
    <div>
      <form
        className="container mt-5"
        // style={{ width: "300px" }}
        onSubmit={(event) => handleSubmit(event, cars)}
      >
        <div className="form-floating mt-3">
          <input
            name="brand"
            value={cars.brand}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="brand"
          />
          <label htmlFor="brand">Brand</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="model"
            value={cars.model}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="model"
          />
          <label htmlFor="model">Model</label>
        </div>
        <div className="form-floating mt-3">
          <select
            className="form-control"
            name="year"
            onChange={handleInputChange}
            value={cars.year}
          >
            <option disabled defaultValue value="">
              Select year:
            </option>
            {years.map((year, index) => {
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <label htmlFor="year">Year</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="max_speed"
            value={cars.max_speed}
            onChange={handleInputChange}
            type="number"
            className="form-control"
            placeholder="Max speed"
          />
          <label htmlFor="maxSpeed">Max Speed</label>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isAutomatic}
            onChange={handleChecked}
            name="is_automatic"
            value={cars.is_automatic}
          />
          <label htmlFor="isAutomatic">Automatic</label>
        </div>
        <label htmlFor="engine">Engine:</label>
        <div>
          <div>
            <input
              type="radio"
              name="engine"
              value="diesel"
              id="diesel"
              onChange={handleInputChange}
            />
            <label htmlFor="diesel">Diesel</label>
          </div>
          <div>
            <input
              type="radio"
              name="engine"
              value="petrol"
              id="petrol"
              onChange={handleInputChange}
            />
            <label htmlFor="petrol">Petrol</label>
          </div>
          <div>
            <input
              type="radio"
              name="engine"
              value="electric"
              id="electric"
              onChange={handleInputChange}
            />
            <label htmlFor="electric">Electric</label>
          </div>
          <div>
            <input
              type="radio"
              name="engine"
              value="hybrid"
              id="hybrid"
              onChange={handleInputChange}
            />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>
        <div className="form-floating mt-3">
          <input
            name="number_of_doors"
            value={cars.number_of_doors}
            onChange={handleInputChange}
            type="number"
            className="form-control"
          />
          <label>Number of doors</label>
        </div>
        <br></br>
        <button
          className=" btn btn-outline-light"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>{" "}
        <button
          className=" btn btn-outline-light"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>{" "}
        <Link className=" btn btn-outline-light" to="/cars">
          Go to cars
        </Link>{" "}
        <Button className=" btn btn-lg btn-secondary" onClick={handlePreview}>
          Preview
        </Button>
        <Preview
          show={showPreview}
          onHide={hidePreview}
          brand={cars.brand}
          model={cars.model}
          year={cars.year}
          maxspeed={cars.max_speed}
          isautomatic={isAutomatic ? "Yes" : "No"}
          engine={cars.engine}
          numberofdoors={cars.number_of_doors}
        />
      </form>
    </div>
  );
};
export default AddCar;
