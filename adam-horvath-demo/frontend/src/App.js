import { useEffect, useState } from 'react';
import './App.css';
import callIndicators from "./apiCall/callIndicators";
import Diagram from './Diagram.jsx';

function App() {
  const [countryNameInput, setCountryNameInput] = useState("");
  const [indicatorNameInput, setIndicatorNameInput] = useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    getData({ 
      "countryName": countryNameInput,
      "indicatorName": indicatorNameInput, 
      "startDate": startDateInput, 
      "endDate": endDateInput 
    })
  };

  const getData = async ({ countryName, indicatorName, startDate, endDate }) => {
    const response = await callIndicators({ 
      countryName, 
      indicatorName, 
      startDate, 
      endDate 
    });
    setData(response.data.historicalData);
  }

  return (
    <div className = "App bg-neutral-200">

        <h2 className = "text-center font-bold text-xl py-4">Chart generator application</h2>
        
        <div className = "flex flex-wrap gap-4 my-2 justify-center">

          <input 
            className = "text-md px-1"
            type = "text" 
            placeholder = "Name of the country"
            value = { countryNameInput }
            onChange = { e => setCountryNameInput(e.target.value) }
          />

          <input 
            className = "text-md px-1"
            type = "text" 
            placeholder = "Name of indicator"
            value = { indicatorNameInput }
            onChange = { e => setIndicatorNameInput(e.target.value) }
          />

          <input 
            className = "text-md px-1"
            type = "text" 
            placeholder = "From [yyyy-mm-dd]"
            value = { startDateInput }
            onChange = { e => setStartDateInput(e.target.value) }
          />

          <input 
            className = "text-md px-1"
            type = "text" 
            placeholder = "To [yyyy-mm-dd]"
            value = { endDateInput }
            onChange = { e => setEndDateInput(e.target.value) }
          />

        </div>

        <button 
            className = "bg-white px-2 py-1 font-bold rounded-sm text-md bg-yellow-400 block mx-auto my-6"
            onClick = { handleClick }
        >
          Generate
        </button>

        <Diagram historicalData = {data}/>
    </div>
  );
}

export default App;
