import React, { useState } from "react";
import { NivelEstudios } from "../models/Cuestionario.model";
import { useDispatch, useSelector } from "react-redux";
import { modificarCuestionario } from "../redux/states/cuestionario";
import { Cuestionario } from "../models/Cuestionario.model";

const FormStep4 = ({ setStep, setPorcentaje }) => {
  const [estudios, setEstudios] = useState(NivelEstudios.Ninguna);
  const niveles: NivelEstudios[] = [];
  niveles.push(
    NivelEstudios.Ninguna,
    NivelEstudios.PrimariaCompleta,
    NivelEstudios.PrimariaIncompleta,
    NivelEstudios.SecundariaCompleta,
    NivelEstudios.SecundariaIncompleta,
    NivelEstudios.TerciariaSuperiorUniversitariaCompleta,
    NivelEstudios.TerciariaSuperiorUniversitariaIncompleta
  );
  //**Cuestionario desde redux */
  const cuestionarioState = useSelector((state: any) => state.cuestionario);
  /**cuestionario temporal para sobrescribir */
  const [cuestionario, setCuestionario] =
    useState<Cuestionario>(cuestionarioState);

  /**Dispatch */
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const newEstado = e.target.value;
    setEstudios(newEstado);
    console.log(newEstado);
    setCuestionario({ ...cuestionario, ["nivelEstudios"]: newEstado });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario
    setStep(5);
    setPorcentaje(50);
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
          ¿Cuál es tu máximo nivel de estudios alcanzado?
        </label>
        <select
          className="border border-indigo-500 rounded-xl w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="selectProvincia"
          value={estudios}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona una</option>
          {niveles.map((nivel) => (
            <option key={nivel} value={nivel}>
              {nivel}
            </option>
          ))}
        </select>
        <button
          disabled={estudios === NivelEstudios.Ninguna}
          className={`w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            estudios === NivelEstudios.Ninguna
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

export default FormStep4;
