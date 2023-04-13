import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Progress from "./components/progress";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";

function App() {
  const [porcentaje, setPorcentaje] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center px-4  bg-gray-100 ">
      {porcentaje > 0 && <Progress porcentaje={porcentaje} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculadora"
            element={<Calculadora setPorcentaje={setPorcentaje} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
