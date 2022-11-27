import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "./index.css";

function App() {
  const [data, setData] = useState({});
  const [locations, setLocations] = useState("");

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=83d385d90f0600f12ae6229195250d7f`;

  const searchLocations = (e) => {
    if (e.key === "Enter") {
      axios.get(baseUrl).then((res) => {
        setData(res.data);
      });
      setLocations("");
    }
  };

  console.log(locations);

  return (
    <div className="app relative text-white">

      <div className="container h-screen w-full mx-auto relative top-[10%] px-[1rem] flex flex-col justify-evenly">
      <div className="search flex justify-center">
        <input
          type="text"
          value={locations}
          placeholder="Enter Locations"
          className="px-5 py-2 backdrop-blur-sm bg-white/30 rounded-xl placeholder-white border"
          onChange={(e) => setLocations(e.target.value)}
          onKeyPress={searchLocations}
        />
      </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1 className="font-bold">{data.main.temp} °F</h1>
            ) : null}
          </div>
          <div className="des">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom flex justify-evenly backdrop-blur-sm bg-white/30 p-[1rem] rounded-xl text-center w-full my-[1rem] mx-auto">
          <div className="feels">
            <p className="font-semibold">{data.main.feels_like}°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="font-semibold">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="font-semibold">{data.wind.speed} MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
