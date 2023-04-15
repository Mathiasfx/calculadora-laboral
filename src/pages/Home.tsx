import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ setPorcentaje }) => {
  useEffect(() => {
    setPorcentaje(0);
  }, []);
  return (
    <div className="flex w-full max-w-5xl">
      <div className="relative mb-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 h-2 bg-blue-500 rounded-full transition-width duration-300"></div>
        </div>
      </div>
      <div className="w-1/2 p-8">
        <img
          src="src/assets/img/calculadora.png"
          alt="Imagen de ejemplo"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-semibold mb-4">
          ¿Cuánto tiempo dedicás a las tareas domésticas y de cuidado?
        </h1>
        <p className="text-gray-600 mb-8">
          Calculá cuánto vale el trabajo no remunerado.
        </p>
        <Link to="/calculadora">
          <button
            type="submit"
            className="mt-4  w-1/2 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Empezar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
