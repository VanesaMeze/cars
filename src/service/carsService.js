import { API } from "../shared/api";

export const getCars = () => {
  // console.log("U");
  return API.get("/cars");
};

export const getCarById = (id) => {
  return API.get(`/cars/${id}`);
};

export const editCarById = (id, car) => {
  return API.put(`/cars/${id}`, car);
};

export const deleteCarById = (id) => {
  return API.delete(`/cars/${id}`);
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
