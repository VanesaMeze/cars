import { useSelector } from "react-redux";
import { selectorCarValue } from "../store/car/selectors";

export const CarRow = () => {
  const carValue = useSelector(selectorCarValue);
  return (
    <ul>
      {carValue}

      {/* <div className="d-flex justify-content-center">
        <div className="card " style={{ width: "300px" }}>
          <div className="card-body">
            <h2 className="card-title">{car.brand}</h2>
            <p className="card-text">{car.model}</p>
            <p className="card-text">{car.year}</p>
            <p className="card-text">{car.max_speed} km/h</p>
            <p className="card-text">{car.automatic}</p>
            <p className="card-text">{car.engine}</p>
            <p className="card-text">{car.number_of_doors}</p>
          </div>
        </div>
      </div> */}
    </ul>
  );
};
