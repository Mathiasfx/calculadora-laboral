import React, { useState } from "react";
import { EstadoCivil } from "../models/Cuestionario.model";
import { useDispatch, useSelector } from "react-redux";
import { modificarCuestionario } from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";

const FormStep3 = ({ setStep, setPorcentaje }) => {
  const [estadoCivil, setEstadoCivil] = useState(EstadoCivil.ninguno);
  //**Cuestionario desde redux */
  const cuestionarioState = useSelector((state: any) => state.cuestionario);
  /**cuestionario temporal para sobrescribir */
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(cuestionarioState);

  /**Dispatch */
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const newEstado = e.target.value;
    setEstadoCivil(newEstado);
    setCuestionario({ ...cuestionario, ["estadoCivil"]: newEstado });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario
    setStep(4);
    setPorcentaje(40);
    //**Accion que modifica el state */
    dispatch(modificarCuestionario(cuestionario));
  };
  return (
    <form onSubmit={handleSubmit} className="h-1/2  px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 flex flex-col">
        <label
          className="block text-gray-700 font-black mb-4 text-lg"
          htmlFor="selectProvincia"
        >
          ¿Cuál es tu estado civil?
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="form-radio opacity-0 absolute cursor-pointer focus:bg-indigo-400 checked:bg-indigo-600"
            name="casada"
            value={EstadoCivil.Casada}
            checked={estadoCivil === EstadoCivil.Casada}
            onChange={handleSelectChange}
          />
          <span
            className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              estadoCivil === EstadoCivil.Casada ? "bg-indigo-800" : ""
            }`}
          >
            Casada/o
          </span>
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="form-radio opacity-0 absolute cursor-pointer"
            name="separada"
            value={EstadoCivil.SeparadaDivorciada}
            checked={estadoCivil === EstadoCivil.SeparadaDivorciada}
            onChange={handleSelectChange}
          />
          <span
            className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              estadoCivil === EstadoCivil.SeparadaDivorciada
                ? "bg-indigo-800"
                : ""
            }`}
          >
            Separada/o o divorciada/o
          </span>
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="form-radio opacity-0 absolute cursor-pointer"
            name="soltera"
            value={EstadoCivil.Soltera}
            checked={estadoCivil === EstadoCivil.Soltera}
            onChange={handleSelectChange}
          />
          <span
            className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              estadoCivil === EstadoCivil.Soltera ? "bg-indigo-800" : ""
            }`}
          >
            Soltera/o
          </span>
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="form-radio opacity-0 absolute cursor-pointer"
            name="unioncivil"
            value={EstadoCivil.UnionCivilConviviente}
            checked={estadoCivil === EstadoCivil.UnionCivilConviviente}
            onChange={handleSelectChange}
          />
          <span
            className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              estadoCivil === EstadoCivil.UnionCivilConviviente
                ? "bg-indigo-800"
                : ""
            }`}
          >
            Unión civil o conviviente
          </span>
        </label>
        <label className="inline-flex items-center mb-3">
          <input
            type="radio"
            className="form-radio opacity-0 absolute cursor-pointer"
            name="viuda"
            value={EstadoCivil.Viuda}
            checked={estadoCivil === EstadoCivil.Viuda}
            onChange={handleSelectChange}
          />
          <span
            className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${
              estadoCivil === EstadoCivil.Viuda ? "bg-indigo-800" : ""
            }`}
          >
            Viuda/o
          </span>
        </label>
        <button
          disabled={estadoCivil === EstadoCivil.ninguno}
          className={`w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            estadoCivil === EstadoCivil.ninguno
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

export default FormStep3;
