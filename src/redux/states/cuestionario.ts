import { createSlice } from "@reduxjs/toolkit";
import {
  Cuestionario,
  Genero,
  EstadoCivil,
  NivelEstudios,
} from "../../models/Cuestionario.model";

export const CuestionarioEmpty: Cuestionario = {
  genero: Genero.PrefieroNoDecirlo,
  yearNacimiento: 0,
  localidad: "",
  estadoCivil: EstadoCivil.Soltera,
  nivelEstudios: NivelEstudios.Ninguna,
  convivis: false,
  cuantasPersonasConviven: "",
  tieneTrabajo: false,
  cuantasHorasTrabaja: 0,
};

export const cuestionarioSlice = createSlice({
  name: "cuestionario",
  initialState: CuestionarioEmpty,
  reducers: {
    createCustionario: (state, action) => {
      return action.payload;
    },
    modificarCuestionario: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCuestionario: () => CuestionarioEmpty,
  },
});

export const { createCustionario, modificarCuestionario, resetCuestionario } =
  cuestionarioSlice.actions;

export default cuestionarioSlice.reducer;
