import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
    },
  },
};


const Diagram = ({ historicalData }) => {

  // remove last element if it has no meaningful information (in my case, it is information
  // about what databases I can access with my free dev key)
  if (historicalData.length !== 0 && historicalData[historicalData.length - 1].Category === "") {
    historicalData.pop();
  }

  // get datetimes and time series values
  const labels = historicalData.map(item => item.DateTime.replace(/([0-9]{4}-[0-9]{2}-[0-9]{2}).*/, "$1"));
  const timeSeries = historicalData.map(item => item.Value);

  if (historicalData.length !== 0) {
    // title
    options.plugins.title.text = historicalData[0].Category + " of " + historicalData[0].Country + " from " + labels[0] + " to " + labels[labels.length - 1];
  }

  const data = {
    labels,
    datasets: [
      {
        data: timeSeries,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className = "h-60 px-8 pb-8">
      <Line
        data = { data }
        options = { options }
      />
    </div>
  )
}

export default Diagram;