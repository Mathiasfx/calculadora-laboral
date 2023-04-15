import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modificarCuestionario } from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";

const FormStep5 = ({ setStep, setPorcentaje }) => {
  const [convivis, setConvivis] = useState(false);
  const [cuantasPersonas, setPersonas] = useState("");

  //**Cuestionario desde redux */
  const cuestionarioState = useSelector((state: any) => state.cuestionario);
  /**cuestionario temporal para sobrescribir */
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(cuestionarioState);

  /**Dispatch */
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const newEstado = e.target.value;
    newEstado === "SI"
      ? setConvivis(true)
      : (setConvivis(false), setPersonas(""));

    setCuestionario({
      ...cuestionario,
      ["convivis"]: newEstado === "SI" ? true : false,
    });
  };

  const handleSelectPersonas = (e) => {
    const newEstado = e.target.value;
    setPersonas(newEstado);
    setCuestionario({
      ...cuestionario,
      ["cuantasPersonasConviven"]: newEstado,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(6);
    setPorcentaje(60);

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
          ¿Convivís con alguien?
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className=" form-radio opacity-0 absolute cursor-pointer focus:bg-indigo-400 checked:bg-indigo-600"
            name="selectConvivis"
            value="SI"
            checked={convivis === true}
            onChange={handleSelectChange}
          />
          <span
            className={`m-3 w-36 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              convivis === true ? "bg-indigo-800" : ""
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
            checked={convivis === false}
            onChange={handleSelectChange}
          />
          <span
            className={`m-3 w-36 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              convivis === false ? "bg-indigo-800" : ""
            }`}
          >
            No
          </span>
        </label>
        {convivis && (
          <>
            <label
              className="block text-gray-700 font-black mb-4 text-lg"
              htmlFor="selectProvincia"
            >
              ¿Con cuántas personas?
            </label>
            <select
              className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectProvincia"
              value={cuantasPersonas}
              onChange={handleSelectPersonas}
            >
              <option value="Con 1">Con 1</option>
              <option value="Entre 2 y 4">Entre 2 y 4</option>
              <option value="Entre 5 y 7">Entre 5 y 7</option>
              <option value="Mas de 8">Más de 8</option>
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

export default FormStep5;
