import React, { useState, useEffect } from "react";
import { TareasHogar, Tareas as TareasModel } from "../models/Tareas.model";
import CardTareas from "../components/CardTareas";
import { useDispatch } from "react-redux";
import { modificarTareas } from "../redux/states/tareasHogar";
import { useNavigate } from "react-router-dom";

const Tareas = ({ setPorcentaje }) => {
  const [tareas, setTareas] = useState<TareasModel[]>([]);
  const navigate = useNavigate();

  /**Dispatch */
  const dispatch = useDispatch();

  useEffect(() => {
    setPorcentaje(100);
    //Cargar Tareas
    const ordenarLimpiar: TareasModel = {
      id: 0,
      nombre: "Ordenar y Limpiar",
      horas: 0,
      icono: "",
    };
    const lavarPlanchar: TareasModel = {
      id: 0,
      nombre: "Lavar y planchar ropa",
      horas: 0,
      icono: "",
    };
    const cuidarMascotaPlanta: TareasModel = {
      id: 0,
      nombre: "Cuidar mascotas y plantas",
      horas: 0,
      icono: "",
    };
    const Amamantar: TareasModel = {
      id: 0,
      nombre: "Amamantar",
      horas: 0,
      icono: "",
    };

    const ayudaTareaEscolar: TareasModel = {
      id: 0,
      nombre: "Ayudar con la tarea escolar",
      horas: 0,
      icono: "",
    };

    const hacerComprasTramites: TareasModel = {
      id: 0,
      nombre: "Hacer compras o trámites",
      horas: 0,
      icono: "",
    };

    const cuidarNiniaAdolecente: TareasModel = {
      id: 0,
      nombre: "Cuidar niña/o o adolescente/s",
      horas: 0,
      icono: "",
    };

    const cuidarAdultoMayor: TareasModel = {
      id: 0,
      nombre: "Cuidar adulta/o mayor",
      horas: 0,
      icono: "",
    };

    const cuidarPersonaDiscapacidad: TareasModel = {
      id: 0,
      nombre: "Cuidar a persona con discapacidad",
      horas: 0,
      icono: "",
    };

    const cuidarFamiliarEnfermo: TareasModel = {
      id: 0,
      nombre: "Cuidar a familiar enferma/o",
      horas: 0,
      icono: "",
    };

    const prepararComida: TareasModel = {
      id: 0,
      nombre: "Preparar la comida",
      horas: 0,
      icono: "",
    };

    const reparacionesHogar: TareasModel = {
      id: 0,
      nombre: "Hacer reparaciones en el hogar",
      horas: 0,
      icono: "",
    };

    const otrasTareasCuidado: TareasModel = {
      id: 0,
      nombre: "Otras tareas de cuidado ",
      horas: 0,
      icono: "",
    };

    setTareas([
      ...tareas,
      ordenarLimpiar,
      lavarPlanchar,
      cuidarMascotaPlanta,
      Amamantar,
      ayudaTareaEscolar,
      hacerComprasTramites,
      cuidarNiniaAdolecente,
      cuidarAdultoMayor,
      cuidarPersonaDiscapacidad,
      cuidarFamiliarEnfermo,
      prepararComida,
      reparacionesHogar,
      otrasTareasCuidado,
    ]);
  }, []);

  const handleClick = (e) => {
    const nuevasTareas: TareasHogar = {
      ordenarLimpiar: tareas[0].horas,
      lavarPlanchar: tareas[1].horas,
      cuidarMascotaPlanta: tareas[2].horas,
      amamantar: tareas[3].horas,
      ayudaTareaEscolar: tareas[4].horas,
      hacerComprasTramites: tareas[5].horas,
      cuidarNiniaAdolecente: tareas[6].horas,
      cuidarAdultoMayor: tareas[7].horas,
      cuidarPersonaDiscapacidad: tareas[8].horas,
      cuidarFamiliarEnfermo: tareas[9].horas,
      prepararComida: tareas[10].horas,
      reparacionesHogar: tareas[11].horas,
      otrasTareasCuidado: tareas[12].horas,
    };

    dispatch(modificarTareas(nuevasTareas));
    navigate("/resultados");
  };
  return (
    <div className="flex h-full justify-center text-center flex-col py-5 w-full max-w-5xl align-middle">
      <h1 className=" text-gray-700 font-black mb-4 mt-4 text-2xl">
        ¿Cuánto tiempo dedicás, en un día habitual, a las siguientes tareas?
      </h1>
      <p>*Cargá la cantidad de horas que te lleva realizar cada una</p>
      <div className="flex justify-center text-center">
        <button
          className="w-2/5 hover:bg-indigo-700 text-white font-bold py-2 my-3 px-4 rounded focus:outline-none focus:shadow-outline bg-indigo-500"
          type="button"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Ver Resultados
        </button>
      </div>

      <div className="flex w-full justify-around align-top  flex-wrap ">
        {tareas.map((item, index) => {
          return (
            <CardTareas
              tareas={tareas}
              nombre={item.nombre}
              icono={item.icono}
              id={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tareas;
