import "./App.css";
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import getData from "./redux/action";
import { FilterStocks } from "./helpers/graphs";
import Chart from 'chart.js/auto';
function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const createChat = (id, stocks, type) => {
    // if (new Chart) {
      let newChart = new Chart(document.querySelector(id), {
        type: "bar",
        data: {
          labels: stocks?.labels,
          datasets: [
            {
              label: "last 5 Days average " + type,
              data: stocks.dataSetData,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    // }
  };
  const loadCanva = (data) => {
    // setStoreData(prev => data);
    
    const topStocks = FilterStocks(data, "top");
    const lowStocks = FilterStocks(data, "low");
    // debugger;
    createChat("#high", topStocks, "high");
    createChat("#low", lowStocks, "low");
    // console.log("storedata", storeData);
  };
  // useEffect(()=>{
    // getData(loadCanva);
  // },[])
  const Stylediv = styled.div`
  // display:grid;
  // grid-template-colomns: auto auto;
  ` 
  return (
    <div className="App">
      <button
        onClick={() => {
          getData(loadCanva);
        }}
      >
        fetch data
      </button>
      <Stylediv >
        <canvas id="high" />
        <canvas id="low" />
      </Stylediv>
    </div>
  );
}

export default App;
