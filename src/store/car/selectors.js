const selectorCarValue = (state) => {
  return state.cars.cars;
};
const selectCounterValue = (state) => {
  return state.cars.selectedCars;
};

export { selectorCarValue, selectCounterValue };
