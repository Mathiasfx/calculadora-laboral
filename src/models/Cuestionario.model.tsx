export interface Cuestionario {
  genero: Genero;
  yearNacimiento: number;
  localidad: string;
  estadoCivil: EstadoCivil;
  nivelEstudios: NivelEstudios;
  convivis: boolean;
  cuantasPersonasConviven?: string;
  tieneTrabajo: boolean;
  cuantasHorasTrabaja: number;
}

export enum Genero {
  Mujer = "Mujer",
  Varon = "Varon",
  MujerTrans = "Mujer Trans",
  VaronTrans = "Varon Trans",
  Travesti = "Travesti",
  NoBinario = "No Binario",
  PrefieroNoDecirlo = "Prefiero No Decirlo",
}

export enum EstadoCivil {
  Casada = "Casada/o",
  SeparadaDivorciada = "Separada/o o divorciada/o",
  Soltera = "Soltera/o",
  UnionCivilConviviente = "Unión civil o conviviente",
  Viuda = "Viuda/o",
  ninguno = "",
}

export enum NivelEstudios {
  Ninguna = "Ninguna de las anteriores",
  PrimariaCompleta = "Primaria completa",
  PrimariaIncompleta = "Primaria incompleta",
  SecundariaCompleta = "Secundaria Completa",
  SecundariaIncompleta = "Secundaria Incompleta",
  TerciariaSuperiorUniversitariaCompleta = "Terciaria, universitaria o superior completa ",
  TerciariaSuperiorUniversitariaIncompleta = "Terciaria, universitaria o superior Incompleta ",
}

export enum HorasTrabajadas {
  Entre1y34 = "Entre 1 y 34 horas semanales",
  Entre35y44 = "Entre 35 y 44 horas semanales",
  Mas45 = "Mas de 45 horas semanales",
}

export enum AyudaEstado {
  jubilacionpension = "Jubilación o pensión",
  asignacion = "Asignación Universal por Hijo/Embarazo",
  TarjetaAlimentar = "Tarjeta Alimentar",
  Potenciartrabajo = "Potenciar trabajo",
  Progresar = "Progresar",
  OtroPlan = "Otro plan social",
  OtroBeneficio = "Otro tipo de beneficio económico",
}
