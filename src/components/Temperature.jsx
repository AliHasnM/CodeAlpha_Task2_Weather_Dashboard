import React from "react";
const Temperature = ({ city, country, iconURL, description, temp, units }) => {
  //   const temperature = units === "metric" ? "C" : "F";
  const temperature = temp
    ? units === "metric"
      ? `${temp.toFixed()} °C`
      : `${(temp * 1.8 + 32).toFixed()} °F`
    : "Loading...";
  return (
    <div className="flex justify-between mx-16 rounded-md my-8 py-4 px-8 bg-zinc-700 ">
      <div className="flex flex-col gap-2 text-xl text-white">
        <h3>{`${city}, ${country}`}</h3>
        <img
          className="w-16 rounded-md"
          //   https://th.bing.com/th/id/OIP.WnbjrRveVU1m7xGwNtm1kgHaHa?rs=1&pid=ImgDetMain
          src={iconURL}
          alt="Weather Icon"
        />
        <h3 className="capitalize">{description}</h3>
      </div>
      <div className="text-6xl text-white flex items-center">
        <h1>{temperature}</h1>
      </div>
    </div>
  );
};

export default Temperature;
