import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
function PieChart({ pending_task, completed_task, in_progress }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Pending", "Completed", "InProgress"],
    datasets: [
      {
        label: "Driver Verification",
        data: [pending_task, completed_task, in_progress],
        backgroundColor: ["#609bfa", "#34D399", "#9966cc"],
      },
    ],
  };
  return (
    <div className="p-8 pb-0  rounded-xl ">
      <Doughnut
        data={data}
        options={{
          cornerRadius: 5,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              padding: 5
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
