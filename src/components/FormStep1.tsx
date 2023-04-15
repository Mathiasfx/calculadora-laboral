import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  CuestionarioEmpty,
  modificarCuestionario,
} from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";
import { Genero } from "../models/Cuestionario.model";

const FormStep1 = ({ setStep, setPorcentaje }) => {
  const [genero, setGenero] = useState<Genero>(Genero.PrefieroNoDecirlo);
  const [anio, setAnio] = useState(0);
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(CuestionarioEmpty);

  /**Dispatch */
  const dispatch = useDispatch();

  useEffect(() => {
    setPorcentaje(10);
  }, []);

  const handleSelectChange = (e) => {
    const newGenero = e.target.value;
    setGenero(e.target.value);
    setCuestionario({ ...cuestionario, ["genero"]: newGenero });
  };

  const handleSelectAnio = (e) => {
    const newYear = e.target.value;
    setAnio(newYear);
    setCuestionario({ ...cuestionario, ["yearNacimiento"]: newYear });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStep(2);
    setPorcentaje(20);
    dispatch(modificarCuestionario(cuestionario));
  };

  //años seleccionables
  const years = Array.from(
    { length: new Date().getFullYear() - 1921 },
    (_, i) => 1922 + i
  );
  return (
    <form onSubmit={handleSubmit} className="h-1/2  px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-black mb-4 text-lg"
          htmlFor="genero"
        >
          ¿Con qué género te identificás?
        </label>
        <select
          className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="genero"
          value={genero}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona una opción</option>
          <option value={Genero.Mujer}>Mujer</option>
          <option value={Genero.Varon}>Varon</option>
          <option value={Genero.MujerTrans}>Mujer Trans</option>
          <option value={Genero.VaronTrans}>Varon Trans</option>
          <option value={Genero.Travesti}>Travesti</option>
          <option value={Genero.NoBinario}>No binario</option>
          <option value={Genero.PrefieroNoDecirlo}>prefiero no decirlo</option>
        </select>

        <label
          className="block text-gray-700 font-black mb-2 mt-3 text-lg"
          htmlFor="selectYear"
        >
          ¿En qué año naciste?
        </label>
        <select
          className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="selectYear"
          value={anio}
          onChange={handleSelectAnio}
        >
          <option value="">Selecciona un año</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={anio === 0}
          className={`w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            anio === 0
              ? "bg-indigo-500 opacity-50 pointer-events-none"
              : "bg-indigo-500"
          }`}
          type="submit"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default FormStep1;
