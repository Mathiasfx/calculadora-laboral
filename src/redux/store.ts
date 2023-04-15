import { configureStore } from "@reduxjs/toolkit";
import cuestionario from "./states/cuestionario";
import tareasHogar from "./states/tareasHogar";

export const store = configureStore({
  reducer: {
    cuestionario: cuestionario,
    tareasHogar: tareasHogar,
  },
});
