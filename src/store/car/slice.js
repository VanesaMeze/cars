import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    selectedCars: 0,
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    removeCar: (state, action) => {
      state.value = state.value.filter((car) => car.id !== action.payload);
    },
    selectCar: (state) => {
      state.selectedCars += 1;
    },
    deselectCar: (state) => {
      state.selectedCars -= 1;
    },
    selectedAll: (state) => {
      state.selectedCars = state.cars.length;
    },
    deselectedAll: (state) => {
      state.selectedCars = 0;
    },
  },
});

export const {
  setCars,
  removeCar,
  selectCar,
  deselectCar,
  selectedAll,
  deselectedAll,
} = carSlice.actions;

export default carSlice.reducer;
