import { useContext } from "react";
import InputTypeContainer from "./InputTypeContainer";
import { FindWinningProductContext } from "../../context/FindWinningProductContext";

const InputDataContainer2 = () => {
  // const {
  //   purchaseCost,
  //   sellPrice,
  //   qtySold,
  //   cancelPercent,
  //   rtoPercent,
  //   adsCost,
  //   rtoCost,
  //   handleRtoCost
  //   handlePurchseCost,
  //   handleSellPrice,
  //   handleQtySold,
  //   handleCancelPercent,
  //   handleRtoPercent,
  //   handleAdsCost,
  // } = useContext(FindWinningProductContext);

  const inputFields = [
    {
      name: "purchase price",
      state: purchaseCost,
      handler: handlePurchseCost,
      min: 0,
      max: 1500,
    },
    {
      name: "sell price",
      state: sellPrice,
      handler: handleSellPrice,
      min: 0,
      max: 1500,
    },
    {
      name: "quantity sold",
      state: qtySold,
      handler: handleQtySold,
      min: 0,
      max: 500,
    },
    {
      name: "Cancel QTY %",
      state: cancelPercent,
      handler: handleCancelPercent,
      min: 0,
      max: 100,
    },
    {
      name: "RTO %",
      state: rtoPercent,
      handler: handleRtoPercent,
      min: 0,
      max: 100,
    },

    {
      name: "Ads Cost Per Product",
      state: adsCost,
      handler: handleAdsCost,
      min: 0,
      max: 1500,
    },
  ];
  return (
    <div className="min-w-[40%] border-dashed border-4 rounded-lg  px-10 py-2 flex flex-col gap-1 font-spline">
      {inputFields.map((field, index) => (
        <InputTypeContainer
          key={index}
          name={field.name}
          value={field.state}
          handleOnChange={field.handler}
          min={field.min}
          max={field.max}
        />
      ))}
    </div>
  );
};

export default InputDataContainer2;
