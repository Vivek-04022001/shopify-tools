import React, { createContext, useContext, useState, useEffect } from "react";

export const FindWinningProductContext = createContext();

export const FindWinningProductProvider = ({ children }) => {
  const [purchaseCost, setPurchaseCost] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [qtySold, setQtySold] = useState(0);
  const [cancelPercent, setCancelPercent] = useState(0);
  const [rtoPercent, setRtoPercent] = useState(0);
  const [adsCost, setAdsCost] = useState(0);
  const [rtoCost, setRtoCost] = useState(0);
  const [effectiveRtoCost, setEffectiveRtoCost] = useState(0);
  const [effectiveFacebookCost, setEffectiveFacebookCost] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  //   const [deliveredQty, setDeliveredQty] = useState(0);
  //   const [effectiveRtoCost, setEffectiveRtoCost] = useState(0);
  const [margin, setMargin] = useState(0);
  const [cancelQty, setCancelQty] = useState(0);
  const [rtoQty, setRtoQty] = useState(0);

  const handlePurchaseCost = (e) => setPurchaseCost(e.target.value);
  const handleSellPrice = (e) => setSellPrice(e.target.value);
  const handleQtySold = (e) => setQtySold(e.target.value);
  const handleCancelPercent = (e) => setCancelPercent(e.target.value);
  const handleRtoPercent = (e) => setRtoPercent(e.target.value);
  const handleAdsCost = (e) => setAdsCost(e.target.value);
  const handleRtoCost = (e) => setRtoCost(e.target.value);

  //   //   calculate functions
  const calculateMargin = () => setMargin(sellPrice - purchaseCost);

  const calculateCancelQty = () =>
    setCancelQty(() => {return (qtySold * (cancelPercent / 100)).toFixed(2)});

  const calculateRtoQty = () => setRtoQty(() => qtySold * (rtoPercent / 100));

  const calculateEffectiveRtoCost = () => {
  
    setEffectiveRtoCost(rtoCost * (rtoPercent * qtySold*0.01));
  }

  const calculateEffectiveFacebookCost = () =>
    setEffectiveFacebookCost(adsCost * qtySold);

  const calculateRevenueCost = () => {
    const qtySoldValue = parseInt(qtySold, 10) || 0;
    const cancelOrderValue = parseInt(cancelQty, 10) || 0;
    const rtoProductValue = parseInt(rtoQty, 10) || 0;
    setRevenue(
      sellPrice * (qtySoldValue - (rtoProductValue + cancelOrderValue))
    );
  };

  const calculateProfitLoss = () => {
    const revenueValue = parseFloat(revenue) || 0;
    const facebookCostValue = parseFloat(effectiveFacebookCost) || 0;
    const purchaseCostValue = parseFloat(purchaseCost) || 0;
    const qtySoldValue = parseFloat(qtySold) || 0;
    const rtoProductValue = parseFloat(effectiveRtoCost) || 0;

    const totalCost = purchaseCostValue * qtySoldValue + rtoProductValue;

    setProfitLoss((revenueValue - facebookCostValue - totalCost).toFixed(2));
  };

  useEffect(() => {
    calculateMargin();
  }, [purchaseCost, sellPrice]);

  useEffect(()=>{
    calculateCancelQty();
  },[qtySold, cancelPercent])

  useEffect(() => {
    calculateEffectiveRtoCost();
  }, [rtoCost, rtoPercent, qtySold]);

  useEffect(() => {
    calculateRevenueCost();
  }, [sellPrice, rtoQty, qtySold, cancelQty]);

  useEffect(() => {
    calculateProfitLoss();
  }, [revenue, effectiveFacebookCost, purchaseCost, qtySold, effectiveRtoCost]);

  useEffect(()=>{
    calculateEffectiveFacebookCost()
  },[adsCost, qtySold])

  const contextValues = {
    purchaseCost,
    sellPrice,
    qtySold,
    cancelPercent,
    rtoPercent,
    adsCost,
    rtoCost,
    effectiveRtoCost,
    effectiveFacebookCost,
    revenue,
    profitLoss,
    cancelQty,

    setPurchaseCost,
    setSellPrice,
    setQtySold,
    setCancelPercent,
    setRtoPercent,
    setAdsCost,
    handlePurchaseCost,
    handleSellPrice,
    handleQtySold,
    handleCancelPercent,
    handleRtoPercent,
    handleAdsCost,
    handleRtoCost,
    calculateMargin,
    calculateCancelQty,
    calculateRtoQty,

    rtoQty,
    setRtoQty,
    setCancelQty,

    margin,

    //     deliveredQty,
    //     setDeliveredQty,
    //     setRtoCost,
    //     effectiveRtoCost,
    //     setEffectiveRtoCost,
    //     revenue,
    //     setRevenue,
    //     profitLoss,
    //     setProfitLoss,
    //     calculateDeliveredQty,
    //     calculateEffectiveRTOcost,
    //     calculateRevenueCost,
    //     calculateProfitLoss,
  };

  return (
    <FindWinningProductContext.Provider value={contextValues}>
      {children}
    </FindWinningProductContext.Provider>
  );
};
