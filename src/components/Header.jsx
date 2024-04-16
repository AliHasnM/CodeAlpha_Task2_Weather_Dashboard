import React from "react";

const Header = ({ handleUnitsClick, enterKeyPressed }) => {
  return (
    <div className="mx-16 py-4 px-8 rounded-md sectionInput flex justify-between bg-zinc-700">
      <input
        onKeyDown={enterKeyPressed}
        className="rounded-md py-1 px-4"
        type="text"
        name="city"
        placeholder="Enter City Name..."
      />
      <button
        onClick={(e) => handleUnitsClick(e)}
        className="bg-zinc-500 w-20 py-1 px-4 rounded-md font-bold text-white text-xl"
      >
        °F
      </button>
    </div>
  );
};

export default Header;
