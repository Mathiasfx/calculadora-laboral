import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Grafico = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["tu promedio", "varones", "mujeres"],
            datasets: [
              {
                label: "Horas trabajadas",
                data: [1, 4, 6],
                backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
              },
            ],
          },
        });
      }
    }
  }, [canvasRef]);

  Chart.defaults.set("horizontalBar", {
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  });

  return <canvas ref={canvasRef} />;
};

export default Grafico;
