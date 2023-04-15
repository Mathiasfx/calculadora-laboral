import { createSlice } from "@reduxjs/toolkit";
import { TareasHogar } from "../../models/Tareas.model";

export const TareasEmpty: TareasHogar = {
  ordenarLimpiar: 0,
  lavarPlanchar: 0,
  cuidarMascotaPlanta: 0,
  amamantar: 0,
  ayudaTareaEscolar: 0,
  hacerComprasTramites: 0,
  cuidarNiniaAdolecente: 0,
  cuidarAdultoMayor: 0,
  cuidarPersonaDiscapacidad: 0,
  cuidarFamiliarEnfermo: 0,
  prepararComida: 0,
  reparacionesHogar: 0,
  otrasTareasCuidado: 0,
};

export const tareasSlice = createSlice({
  name: "tareas",
  initialState: TareasEmpty,
  reducers: {
    modificarTareas: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetTareas: () => TareasEmpty,
  },
});

export const { modificarTareas, resetTareas } = tareasSlice.actions;

export default tareasSlice.reducer;
