import "./App.css";
import {useEffect, useState} from 'react';
import getData from "./redux/action";
import { FilterStocks } from "./helpers/graphs";
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
              label: "last 5 Days " + type,
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
  // getData(loadCanva);
  return (
    <div className="App">
      <button
        onClick={() => {
          getData(loadCanva);
        }}
      >
        fetch data
      </button>
      <canvas id="high" />
      <canvas id="low" />
    </div>
  );
}

export default App;
