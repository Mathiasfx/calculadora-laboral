import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sumarValores } from "../utilities/SumarHoras";

const Resultados = () => {
  const [expanded, setExpanded] = useState(false);
  const [total, setTotal] = useState(0);
  const [importe, setImporte] = useState(0);
  const [importeText, setImporteText] = useState("");
  //**Tareas desde redux */
  const tareasTotal = useSelector((state: any) => state.tareasHogar);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(tareasTotal);
  };

  useEffect(() => {
    setTotal(sumarValores(tareasTotal));

    if (total > 0) {
      setImporte(total * 600);
      // Formatear el valor numérico a pesos
      setImporteText(
        new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(importe)
      );
    }

    return () => {};
  }, [total, importe]);

  return (
    <div className="flex w-full h-full justify-center text-center flex-col py-5 max-w-5xl align-middle">
      <h1 className=" text-gray-700 font-black mb-4 mt-4 text-2xl">
        Tiempo que dedicás a las tareas domésticas y de cuidado
      </h1>
      <div className="w-full flex h-full">
        <div className="w-1/2 ">
          <div className="border border-gray-300 rounded-lg  bg-indigo-600 text-white">
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              onClick={handleExpandClick}
            >
              <div className="flex flex-col text-start items-start">
                <span className="text-2xl font-extrabold">{total} Hs</span>
                <p>dedicás por mes a las tareas domésticas y de cuidados.</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{expanded ? "" : ""}</span>
                <svg
                  className={`w-4 h-4 fill-current text-gray-500 ${
                    expanded && "transform rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 9l4 4 4-4" />
                </svg>
              </div>
            </div>
            <div className={`px-4 py-2 text-start ${expanded ? "" : "hidden"}`}>
              <p>Contenido del panel de expansión</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 border h-32 max-h-32  border-gray-300 rounded-lg bg-orange-400 text-white">
          <div className="flex flex-col text-start items-start px-4 py-4">
            <span className="text-2xl font-extrabold">{importeText}</span>
            <p>
              es lo que pagarías por mes si contrataras a una trabajadora de
              casa particular.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>
          La distribución desigual resta tiempo y oportunidades a las mujeres y
          las niñas para educarse e insertarse en trabajos remunerados y de
          calidad.
        </p>
      </div>
    </div>
  );
};

export default Resultados;
