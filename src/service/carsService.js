import { API } from "../shared/api";

export const getCars = () => {
  // console.log("U");
  return API.get("/cars");
};

export const postCars = (
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors
) => {
  return API.post("/cars", {
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors,
  });
};
