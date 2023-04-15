export interface Tareas {
  id: number;
  nombre: string;
  horas: number;
  icono: string;
}

export interface TareasHogar {
  ordenarLimpiar: number;
  lavarPlanchar: number;
  cuidarMascotaPlanta: number;
  amamantar: number;
  ayudaTareaEscolar: number;
  hacerComprasTramites: number;
  cuidarNiniaAdolecente: number;
  cuidarAdultoMayor: number;
  cuidarPersonaDiscapacidad: number;
  cuidarFamiliarEnfermo: number;
  prepararComida: number;
  reparacionesHogar: number;
  otrasTareasCuidado: number;
}
