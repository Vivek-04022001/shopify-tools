import { useContext } from "react";
import { FindWinningProductContext } from "../../context/FindWinningProductContext";
import CalculationItem from "./CalculationItem";

const DisplayContainer = () => {
  const {
    purchaseCost,
    sellPrice,
    margin,
    qtySold,
    cancelQty,
    effectiveFacebookCost,
    effectiveRtoCost,
    revenue,
    profitLoss,
  } = useContext(FindWinningProductContext);

  // Define an array of calculation items
  const calculationItems = [
    { value: purchaseCost, label: "Purchase Price" },
    { value: sellPrice, label: "Sell Price" },
    { value: margin, label: "Margin" },
    { value: qtySold, label: "Ordered Qty." },
    { value: cancelQty, label: "Cancelled Qty." },
    { value: effectiveRtoCost, label: "Effective RTO Cost" },
    {
      value: effectiveFacebookCost,
      label: "Effective Facebook Cost",
      isCurrency: true,
    },
    { value: revenue, label: "Revenue" },
    { value: profitLoss, label: "Profit/Loss", isCurrency: profitLoss > 0 },
  ];
  return (
    <div className=" flex flex-col flex-1 border-secondary border-dashed border-4 px-10 py-2 gap-y-8">
      <h1 className="text-center font-semibold text-3xl md:text-6xl font-instrumental tracking-wide">
        Find Winning Product
      </h1>

      {/* display calculations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-y-16 md:gap-x-10">
        {calculationItems.map((item, index) => (
          <CalculationItem
            key={index}
            value={item.value}
            label={item.label}
            isCurrency={item.isCurrency}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayContainer;
