import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

const CardTareas = ({ nombre, icono, id, tareas }) => {
  const [horas, setHoras] = useState(0);

  const sumarHoras = (id) => {
    const nuevaHora = horas + 0.5;
    setHoras(nuevaHora);
    tareas[id].horas = nuevaHora;
  };

  const restarHoras = (id) => {
    if (horas > 0) {
      const nuevaHora = horas - 0.5;
      setHoras(nuevaHora);
      tareas[id].horas = nuevaHora;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-2 w-2/5 h-32  flex flex-col align-middle my-1">
      <h2 className="text-md font-semibold mb-2">{nombre}</h2>
      {/* <FontAwesomeIcon icon={icono} className="text-gray-500 text-xl" /> */}
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded-full focus:outline-none"
            onClick={(e) => {
              restarHoras(id);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="mx-2">{horas} horas</span>
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded-full focus:outline-none"
            onClick={(e) => {
              sumarHoras(id);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTareas;
