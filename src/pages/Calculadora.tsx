import React from "react";
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
import FormStep3 from "../components/FormStep3";
import FormStep4 from "../components/FormStep4";
import FormStep5 from "../components/FormStep5";
import FormStep6 from "../components/FormStep6";
import Tareas from "./Tareas";

const Calculadora = ({ setPorcentaje, step, setStep }) => {
  return (
    <div className="flex h-1/2 w-full max-w-5xl align-middle">
      {step == 7 && <Tareas setPorcentaje={setPorcentaje} />}
      {step !== 7 && (
        <>
          <div className="w-1/2 h-1/2 p-8">
            <img
              src="src/assets/img/casa.png"
              alt="Imagen de ejemplo"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-8">
            {step == 1 && (
              <FormStep1 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
            {step == 2 && (
              <FormStep2 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
            {step == 3 && (
              <FormStep3 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
            {step == 4 && (
              <FormStep4 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
            {step == 5 && (
              <FormStep5 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
            {step == 6 && (
              <FormStep6 setStep={setStep} setPorcentaje={setPorcentaje} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Calculadora;
