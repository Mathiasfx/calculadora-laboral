import { TareasHogar } from "../models/Tareas.model";

export const sumarValores = (tareas: TareasHogar): number => {
  // Obtenemos los valores del objeto
  const {
    ordenarLimpiar,
    lavarPlanchar,
    cuidarMascotaPlanta,
    amamantar,
    ayudaTareaEscolar,
    hacerComprasTramites,
    cuidarNiniaAdolecente,
    cuidarAdultoMayor,
    cuidarPersonaDiscapacidad,
    cuidarFamiliarEnfermo,
    prepararComida,
    reparacionesHogar,
    otrasTareasCuidado,
  } = tareas;

  // Realizamos la suma de los valores
  const suma =
    ordenarLimpiar +
    lavarPlanchar +
    cuidarMascotaPlanta +
    amamantar +
    ayudaTareaEscolar +
    hacerComprasTramites +
    cuidarNiniaAdolecente +
    cuidarAdultoMayor +
    cuidarPersonaDiscapacidad +
    cuidarFamiliarEnfermo +
    prepararComida +
    reparacionesHogar +
    otrasTareasCuidado;

  const resultado = suma * 30;

  // Retornamos el resultado
  return resultado;
};
