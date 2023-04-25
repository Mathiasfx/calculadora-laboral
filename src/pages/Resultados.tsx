import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sumarValores } from "../utilities/SumarHoras";
import Grafico from "../components/Grafico";

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
        <p className="bg-amber-200 text-gray-600 text-start mt-5 py-4 px-4">
          La distribución desigual{" "}
          <span className="text-gray-900 font-bold">resta tiempo</span> y
          <span className="text-gray-900 font-bold"> oportunidades</span> a las{" "}
          <span className="text-gray-900 font-bold">mujeres </span> y las
          <span className="text-gray-900 font-bold"> niñas</span> para educarse
          e insertarse en trabajos remunerados y de calidad.
        </p>
      </div>
      <div className="flex m-2">
        <div className="w-1/2 bg-amber-500 text-white mt-5 mr-5 rounded-full h-4/5 px-6 py-6 ">
          <h1 className="font-bold text-5xl">192</h1>
          <h4 className="font-bold text-3xl">horas por mes</h4>
          <p className="py-2 px-2">
            Dedican las <span className=" font-bold">mujeres</span> en Argentina
            a este trabajo. ¡Son{" "}
            <span className=" font-bold">8 días enteros</span>! El doble del
            tiempo que dedican los varones.
          </p>
        </div>
        <div className="w-1/2">
          <Grafico mipromedio={total} />
        </div>
      </div>
      <div className="bg-pink-700 text-white rounded-3xl  px-10 py-10 mt-5 text-start">
        <p>
          Estas <span className="font-bold">tareas</span> tienen un{" "}
          <span className="font-bold">valor</span> que se mide en{" "}
          <span className="font-bold">tiempo</span>.{" "}
          <span className="font-bold">Reconocerlo</span> es el primer paso para
          lograr una <span className="font-bold">sociedad más justa</span> para
          todas y todos.
        </p>
      </div>
      <hr className="mt-6" />
    </div>
  );
};

export default Resultados;
