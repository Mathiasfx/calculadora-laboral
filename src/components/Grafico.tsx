import React, { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafico = ({ mipromedio }: { mipromedio: number }) => {
  const [promedioDia, setPromedioDia] = useState(0);
  useEffect(() => {
    setPromedioDia(mipromedio / 30);
  }, [mipromedio]);
  const contenidoBar = {
    labels: ["Mi valor", "Varones", "Mujeres"],
    datasets: [
      {
        label: "Promedio de horas trabajadas",
        data: [promedioDia, 3.4, 6.4],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(61, 217, 217, 1)",
          "rgba(48, 19, 85, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return <>{promedioDia > 0 && <Bar data={contenidoBar} />}</>;
};

export default Grafico;
