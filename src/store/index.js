import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/slice";

export default configureStore({
  reducer: {
    cars: carReducer,
  },
});
