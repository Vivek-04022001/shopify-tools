import React from "react";

const InputTypeContainer = ({ name, value, handleOnChange, min, max }) => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <h3 className="text-md font-bold mb-1 text-center capitalize">{name}</h3>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        className="input input-bordered md:input-md input-sm "
      />
      <input
        type="range"
        step="1"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        className="range range-secondary range-sm md:range-md"
      />
    </div>
  );
};

export default InputTypeContainer;
