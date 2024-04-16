import React, { useEffect, useState } from "react";
import hotBg from "./assets/hot.jpg";
import coolBg from "./assets/cool.jpg";
import Header from "./components/Header";
import Temperature from "./components/Temperature";
import Description from "./components/Description";
import { getFormattedWeatherData } from "./api/weatherService";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("Burewala");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      // Dynamic Bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) {
        setBg(coolBg);
      } else {
        setBg(hotBg);
      }
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div
      className="bg-cover bg-center h-full py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header
        handleUnitsClick={handleUnitsClick}
        enterKeyPressed={enterKeyPressed}
      />
      <Temperature
        city={weather && weather.name}
        country={weather && weather.country}
        iconURL={weather && weather.iconURL}
        description={weather && weather.description}
        temp={weather && weather.temp}
        units={units}
      />
      <Description weather={weather} units={units} />
    </div>
  );
};

export default App;
