import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modificarCuestionario } from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";

const FormStep6 = ({ setStep, setPorcentaje }) => {
  const [trabajo, setTrabajo] = useState(false);
  const [cuantasHoras, setHoras] = useState("");

  //**Cuestionario desde redux */
  const cuestionarioState = useSelector((state: any) => state.cuestionario);
  /**cuestionario temporal para sobrescribir */
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(cuestionarioState);
  /**Dispatch */
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const newEstado = e.target.value;
    newEstado === "SI" ? setTrabajo(true) : (setTrabajo(false), setHoras(""));
    setCuestionario({
      ...cuestionario,
      ["tieneTrabajo"]: newEstado === "SI" ? true : false,
    });
  };

  const handleSelectHoras = (e) => {
    const newEstado = e.target.value;
    setHoras(newEstado);
    setCuestionario({ ...cuestionario, ["cuantasHorasTrabaja"]: newEstado });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(7);
    setPorcentaje(75);
    //**Accion que modifica el state */
    dispatch(modificarCuestionario(cuestionario));
  };
  return (
    <form onSubmit={handleSubmit} className="h-1/2  px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-black mb-4 text-lg"
          htmlFor="selectConvivis"
        >
          ¿Tenés un trabajo remunerado?
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className=" form-radio opacity-0 absolute cursor-pointer focus:bg-indigo-400 checked:bg-indigo-600"
            name="selectConvivis"
            value="SI"
            checked={trabajo === true}
            onChange={handleSelectChange}
          />
          <span
            className={`m-3 w-36 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              trabajo === true ? "bg-indigo-800" : ""
            }`}
          >
            Si
          </span>
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="  form-radio opacity-0 absolute cursor-pointer focus:bg-indigo-400 checked:bg-indigo-600"
            name="selectConvivis"
            value="NO"
            checked={trabajo === false}
            onChange={handleSelectChange}
          />
          <span
            className={`m-3 w-36 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              trabajo === false ? "bg-indigo-800" : ""
            }`}
          >
            No
          </span>
        </label>
        {trabajo && (
          <>
            <label
              className="block text-gray-700 font-black mb-4 text-lg"
              htmlFor="selectProvincia"
            >
              ¿Cuántas horas por semana trabajás de forma remunerada?
            </label>
            <select
              className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectProvincia"
              value={cuantasHoras}
              onChange={handleSelectHoras}
            >
              <option value="">Selecciona una</option>
              <option value="Entre 1 y 34hs semanales">
                Entre 1 y 34hs semanales
              </option>
              <option value="Entre 35 y 44hs semanales">
                Entre 35 y 44hs semanales
              </option>
              <option value="Más de 45hs semanales">
                Más de 45hs semanales
              </option>
            </select>
          </>
        )}
        <button
          className={`w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-indigo-500 `}
          type="submit"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default FormStep6;
