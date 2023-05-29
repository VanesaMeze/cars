import { Link, useNavigate } from "react-router-dom";
import { postCars } from "../service/carsService";
import { useState } from "react";

const AddCar = () => {
  let years = [];

  const navigate = useNavigate();

  for (let i = 1990; i <= 2018; i++) {
    years.push(i);
  }

  const handleInputChange = (event) => {
    console.log(event.target.checked);
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioButtonChange = (type) => {
    setState((prevState) => {
      return { ...prevState, engine: type };
    });
  };

  const handlePreview = () => {
    const carPreview = `Brand: ${state.brand}\nModel: ${state.model}\nYear: ${state.year}\nMax Speed: ${state.maxSpeed}\nIs automatic: ${state.isAutomatic}\nEngine: ${state.engine}\nNumber of Doors: ${state.numberOfDoors}`;
    alert(carPreview);
  };

  const resetInput = () => {
    setState((prevState) => ({
      ...prevState,
      brand: "",
      model: "",
      year: 0,
      maxSpeed: 0,
      isAutomatic: false,
      engine: "",
      numberOfDoors: 0,
    }));
  };

  const [state, setState] = useState({
    brand: "",
    model: "",
    year: 0,
    maxSpeed: 0,
    isAutomatic: false,
    engine: "",
    numberOfDoors: 0,
  });

  const handleSubmit = (event, state) => {
    event.preventDefault();
    console.log(state.isAutomatic);
    postCars(
      state.brand,
      state.model,
      state.year,
      state.maxSpeed,
      state.isAutomatic,
      state.engine,
      state.numberOfDoors
    );

    setState({
      brand: "",
      model: "",
      year: 0,
      maxSpeed: 0,
      isAutomatic: false,
      engine: "",
      numberOfDoors: 0,
    });

    navigate("/");
  };

  return (
    <form
      className="container mt-5"
      onSubmit={(event) => handleSubmit(event, state)}
    >
      <h3 className="label">Add new car:</h3>
      <div className="form-floating mt-3">
        <input
          name="brand"
          value={state.brand}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          // required
        />
        <label>Brand</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="model"
          value={state.model}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          // required
        />
        <label>Model</label>
      </div>
      <div className="form-floating mt-3">
        <select
          value={state.year}
          className="form-control input"
          name="year"
          onChange={handleInputChange}
        >
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <label>Select year:</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="maxSpeed"
          value={state.maxSpeed}
          onChange={handleInputChange}
          type="number"
          className="form-control"
        />
        <label>Max Speed</label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleInputChange}
          name="isAutomatic"
          value={state.isAutomatic}
          placeholder="is automatic"
        />
        <label
          className="form-check-label"
          htmlFor="isAutomatic"
          checked={isChecked}
          onChange={handleCheckboxChange}
        >
          {" "}
          Is Automatic
        </label>
      </div>
      <br></br>
      <div>
        <p name="engine" value={state.engine} onChange={handleInputChange}>
          {" "}
          Engine type:
        </p>
        <label>
          <input
            type="radio"
            value="diesel"
            name="engineRad"
            onChange={() => handleRadioButtonChange("Diesel")}
          />{" "}
          Diesel
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="petrol"
            name="engineRad"
            onChange={() => handleRadioButtonChange("Petrol")}
          />{" "}
          Petrol
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="electric"
            name="engineRad"
            onChange={() => handleRadioButtonChange("Electric")}
          />{" "}
          Electric
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="hybrid"
            name="engineRad"
            onChange={() => handleRadioButtonChange("Hybrid")}
          />{" "}
          Hybrid
        </label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="numberOfDoors"
          value={state.numberOfDoors}
          onChange={handleInputChange}
          type="number"
          className="form-control"
        />
        <label>Number Of Doors</label>
      </div>
      <br></br>
      <hr></hr>
      <Link to={`/cars`}>
        <button
          type="submit"
          onClick={(event) => handleSubmit(event, state)}
          className="btn btn-outline-light"
        >
          Add
        </button>
      </Link>{" "}
      <Link to={`/addCar`}>
        <button
          type="submit"
          onClick={() => resetInput(state)}
          className="btn btn-outline-light"
        >
          Reset
        </button>
      </Link>{" "}
      <button
        type="button"
        onClick={handlePreview}
        className="btn btn-outline-info"
      >
        Preview
      </button>
      <br></br>
      <br></br>
      <br></br>
    </form>
  );
};

export default AddCar;
