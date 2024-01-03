// CalculationItem.jsx
import React from 'react';

const CalculationItem = ({ value, label, isCurrency }) => {
  return (
    <div className={`
    min-w-[120px] p-2 rounded-lg border flex flex-col gap-y-4 capitalize
     ${isCurrency ? 'currency' : ''} font-spline`}>
      <span className='text-3xl text-center font-bold'>{isCurrency ? formatCurrency(value) : value}</span>
      <span className='text-md text-center font-thin'>{label}</span>
    </div>
  );
};

const formatCurrency = (value) => {
  return value >= 10000 ? (value / 1000).toFixed(2) + 'K' : value;
};

export default CalculationItem;
