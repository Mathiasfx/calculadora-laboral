import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Progress from "./components/Progress";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Resultados from "./pages/Resultados";

function App() {
  const [porcentaje, setPorcentaje] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center px-4  bg-gray-100 ">
      {porcentaje > 0 && porcentaje < 100 && (
        <Progress porcentaje={porcentaje} />
      )}
      <BrowserRouter basename="/calculadora">
        <Routes>
          <Route path="/" element={<Home setPorcentaje={setPorcentaje} />} />
          <Route
            path="/cuestionario"
            element={
              <Calculadora
                setPorcentaje={setPorcentaje}
                step={step}
                setStep={setStep}
              />
            }
          />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
