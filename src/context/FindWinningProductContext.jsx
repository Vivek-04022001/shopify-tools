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
  //   const [deliveredQty, setDeliveredQty] = useState(0);
  //   const [effectiveRtoCost, setEffectiveRtoCost] = useState(0);
  //   const [revenue, setRevenue] = useState(0);
  //   const [profitLoss, setProfitLoss] = useState(0);
  const [margin, setMargin] = useState(0);
  const [cancelQty, setCancelQty] = useState(0);
  const [rtoQty, setRtoQty] = useState(0);

  const handlePurchseCost = (e) => setPurchaseCost(e.target.value);
  const handleSellPrice = (e) => setSellPrice(e.target.value);
  const handleQtySold = (e) => setQtySold(e.target.value);
  const handleCancelPercent = (e) => setCancelPercent(e.target.value);
  const handleRtoPercent = (e) => setRtoPercent(e.target.value);
  const handleAdsCost = (e) => setAdsCost(e.target.value);
  const handleRtoCost = (e) => setRtoCost(e.target.value);

  //   //   calculate functions
  const calculateMargin = () => setMargin(sellPrice - purchaseCost);

  const calculateCancelQty = () =>
    setCancelQty(() => qtySold * (cancelPercent / 100));
  
    const calculateRtoQty = () =>
    setRtoQty(() => qtySold * (rtoPercent / 100));

  //   const calculateDeliveredQty = () => {
  //     const qtySoldValue = parseInt(qtySold, 10) || 0;
  //     const cancelOrderValue = parseInt(cancelOrder, 10) || 0;
  //     const rtoProductValue = parseInt(rtoProduct, 10) || 0;
  //     setDeliveredQty(qtySoldValue - (cancelOrderValue + rtoProductValue));
  //   };

  //   const calculateEffectiveRTOcost = () => {
  //     const rtoProductValue = parseInt(rtoProduct, 10) || 0;
  //     const rtoCostValue = parseInt(rtoCost, 10) || 0;
  //     setEffectiveRtoCost(rtoProductValue * rtoCostValue);
  //   };

  //   const calculateRevenueCost = () => {
  //     const qtySoldValue = parseInt(qtySold, 10) || 0;
  //     const cancelOrderValue = parseInt(cancelOrder, 10) || 0;
  //     const rtoProductValue = parseInt(rtoProduct, 10) || 0;
  //     setRevenue(
  //       sellPrice * (qtySoldValue - (rtoProductValue + cancelOrderValue))
  //     );
  //   };

  //   const calculateProfitLoss = () => {
  //     const revenueValue = parseFloat(revenue) || 0;
  //     const facebookCostValue = parseFloat(facebookCost) || 0;
  //     const purchaseCostValue = parseFloat(purchaseCost) || 0;
  //     const qtySoldValue = parseFloat(qtySold) || 0;
  //     const cancelOrderValue = parseFloat(cancelOrder) || 0;
  //     const rtoProductValue = parseFloat(rtoProduct) || 0;
  //     const rtoCostValue = parseFloat(rtoCost) || 0;

  //     const totalCost =
  //       purchaseCostValue * qtySoldValue + rtoCostValue * rtoProductValue;

  //     setProfitLoss(revenueValue - facebookCostValue - totalCost);
  //   };

  //   useEffect(() => {
  //     calculateMargin();
  //   }, [purchaseCost, sellPrice]);

  //   useEffect(() => {
  //     calculateDeliveredQty();
  //   }, [qtySold, cancelOrder, rtoProduct]);

  //   useEffect(() => {
  //     calculateEffectiveRTOcost();
  //   }, [rtoCost, rtoProduct]);

  //   useEffect(() => {
  //     calculateRevenueCost();
  //   }, [sellPrice, rtoProduct, qtySold, cancelOrder]);

  //   useEffect(() => {
  //     calculateProfitLoss();
  //   }, [
  //     revenue,
  //     facebookCost,
  //     purchaseCost,
  //     qtySold,
  //     cancelOrder,
  //     rtoCost,
  //     rtoProduct,
  //   ]);

  const contextValues = {
    purchaseCost,
    sellPrice,
    qtySold,
    cancelPercent,
    rtoPercent,
    adsCost,
    rtoCost,
    setPurchaseCost,
    setSellPrice,
    setQtySold,
    setCancelPercent,
    setRtoPercent,
    setAdsCost,
    handlePurchseCost,
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
    cancelQty,
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
