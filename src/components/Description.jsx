import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather && weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather && weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather && weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather && weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather && weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather && weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="mx-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:gap-4 lg:grid-cols-3">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div
          key={id}
          className="card bg-zinc-700 w-40 text-xl text-white rounded-md m-auto"
        >
          <div className="carddesc flex flex-col items-center justify-center gap-1 p-4">
            {icon}
            <small>{title}</small>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
