import React, { createContext, useContext, useState, useEffect } from "react";

export const AfterSalesContext = createContext();

export const AfterSalesProvider = ({ children }) => {
  const [purchaseCost, setPurchaseCost] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [qtySold, setQtySold] = useState(0);
  const [cancelOrder, setCancelOrder] = useState(0);
  const [rtoProduct, setRtoProduct] = useState(0);
  const [facebookCost, setFacebookCost] = useState(0);
  const [deliveredQty, setDeliveredQty] = useState(0);
  const [rtoCost, setRtoCost] = useState(0);
  const [effectiveRtoCost, setEffectiveRtoCost] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [margin, setMargin] = useState(0);

  const handlePurchseCost = (e) => setPurchaseCost(e.target.value);
  const handleSellPrice = (e) => setSellPrice(e.target.value);
  const handleQtySold = (e) => setQtySold(e.target.value);
  const handleCancelOrder = (e) => setCancelOrder(e.target.value);
  const handleRtoProduct = (e) => setRtoProduct(e.target.value);
  const handleRtoCost = (e) => setRtoCost(e.target.value);
  const handleFacebookCost = (e) => setFacebookCost(e.target.value);

  //   calculate functions

  const calculateMargin = () => setMargin(sellPrice - purchaseCost);

  const calculateDeliveredQty = () => {
    const qtySoldValue = parseInt(qtySold, 10) || 0;
    const cancelOrderValue = parseInt(cancelOrder, 10) || 0;
    const rtoProductValue = parseInt(rtoProduct, 10) || 0;
    setDeliveredQty(qtySoldValue - (cancelOrderValue + rtoProductValue));
  };

  const calculateEffectiveRTOcost = () => {
    const rtoProductValue = parseInt(rtoProduct, 10) || 0;
    const rtoCostValue = parseInt(rtoCost, 10) || 0;
    setEffectiveRtoCost(rtoProductValue * rtoCostValue);
  };

  const calculateRevenueCost = () => {
    const qtySoldValue = parseInt(qtySold, 10) || 0;
    const cancelOrderValue = parseInt(cancelOrder, 10) || 0;
    const rtoProductValue = parseInt(rtoProduct, 10) || 0;
    setRevenue(
      sellPrice * (qtySoldValue - (rtoProductValue + cancelOrderValue))
    );
  };

  const calculateProfitLoss = () => {
    const revenueValue = parseFloat(revenue) || 0;
    const facebookCostValue = parseFloat(facebookCost) || 0;
    const purchaseCostValue = parseFloat(purchaseCost) || 0;
    const qtySoldValue = parseFloat(qtySold) || 0;
    const EffectiveRtoCostValue = parseFloat(effectiveRtoCost) || 0;

    const totalCost = purchaseCostValue * qtySoldValue + EffectiveRtoCostValue;

    setProfitLoss(revenueValue - facebookCostValue - totalCost);
  };

  useEffect(() => {
    calculateMargin();
  }, [purchaseCost, sellPrice]);

  useEffect(() => {
    calculateDeliveredQty();
  }, [qtySold, cancelOrder, rtoProduct]);

  useEffect(() => {
    calculateEffectiveRTOcost();
  }, [rtoCost, rtoProduct]);

  useEffect(() => {
    calculateRevenueCost();
  }, [sellPrice, rtoProduct, qtySold, cancelOrder]);

  useEffect(() => {
    calculateProfitLoss();
  }, [revenue, facebookCost, purchaseCost, qtySold, effectiveRtoCost]);

  const contextValues = {
    purchaseCost,
    setPurchaseCost,
    sellPrice,
    setSellPrice,
    qtySold,
    setQtySold,
    cancelOrder,
    setCancelOrder,
    rtoProduct,
    setRtoProduct,
    facebookCost,
    setFacebookCost,
    deliveredQty,
    setDeliveredQty,
    rtoCost,
    setRtoCost,
    effectiveRtoCost,
    setEffectiveRtoCost,
    revenue,
    setRevenue,
    profitLoss,
    setProfitLoss,
    margin,
    handlePurchseCost,
    handleSellPrice,
    handleQtySold,
    handleCancelOrder,
    handleRtoProduct,
    handleRtoCost,
    handleFacebookCost,
    calculateMargin,
    calculateDeliveredQty,
    calculateEffectiveRTOcost,
    calculateRevenueCost,
    calculateProfitLoss,
  };

  return (
    <AfterSalesContext.Provider value={contextValues}>
      {children}
    </AfterSalesContext.Provider>
  );
};
