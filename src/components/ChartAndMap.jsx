import axios from "axios";
import { useQuery } from "react-query";
import { Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "./map";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

const Map = () => {
  const [chartData, setChartData] = useState({});

    // Fetch countries data
  const { data: countriesData } = useQuery("countriesData", () =>
    axios("https://disease.sh/v3/covid-19/countries").then((res) => res.data)
  );

    // Fetch historical data
  const { data: historicalData } = useQuery("historicalData", () =>
    axios("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.data
    )
  );

  useEffect(() => {
    if (historicalData) {

       // Prepare chart data
      const newChartData = {
        labels: Object.keys(historicalData.cases),
        datasets: [
          {
            label: "Cases",
            data: Object.values(historicalData.cases),
            fill: false,
            borderColor: "#f50057",
            tension: 0.2,
          },
        ],
      };
      setChartData(newChartData);
    }

    // Register chart components
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, [historicalData]);

  return (
    <div className="w-full flex flex-col justify-center items-center border m-10 bg-white border-black">
      <h2 className="h1 d-flex justify-content-center font-bold	 text-2xl py-5 ">
        Corona Cases Chart
      </h2>
      <div className="w-2/3 border bg-white border-black  p-1">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="">Loading...</h1>
        )}
      </div>
      <h1 className="h1 d-flex justify-content-center font-bold	 text-2xl py-5">
        Corona Cases World Map
      </h1>
      <div className="p-5 sm:px-16 md:px-28 lg:px-44 container" id="">
        <MapContainer
          center={[25.59, 85.13]}
          zoom={4}
          scrollWheelZoom={true}
          className=""
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countriesData && <WorldMap countriesData={countriesData} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
