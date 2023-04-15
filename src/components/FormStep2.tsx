import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modificarCuestionario } from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";
const FormStep2 = ({ setStep, setPorcentaje }) => {
  const [provincia, setProvincia] = useState("");
  //**Cuestionario desde redux */
  const cuestionarioState = useSelector((state: any) => state.cuestionario);
  /**cuestionario temporal para sobrescribir */
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(cuestionarioState);

  /**Dispatch */
  const dispatch = useDispatch();

  /**Provincias Argentinas */
  const provinciasArgentina = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
    "Islas Malvinas",
  ];

  const handleSelectChange = (e) => {
    const nuevaProvincia = e.target.value;
    setProvincia(nuevaProvincia);
    setCuestionario({ ...cuestionario, ["localidad"]: nuevaProvincia });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario

    setStep(3);
    setPorcentaje(30);
    dispatch(modificarCuestionario(cuestionario));
  };

  return (
    <form onSubmit={handleSubmit} className="h-1/2  px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-black mb-4 text-lg"
          htmlFor="selectProvincia"
        >
          ¿En qué lugar de Argentina vivís?
        </label>
        <select
          className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="selectProvincia"
          value={provincia}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona una</option>
          {provinciasArgentina.map((provincia) => (
            <option key={provincia} value={provincia}>
              {provincia}
            </option>
          ))}
        </select>
        <button
          disabled={provincia === ""}
          className={`w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            provincia === ""
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

export default FormStep2;
