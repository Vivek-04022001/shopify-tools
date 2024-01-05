import { useContext} from 'react'
import InputTypeContainer from './InputTypeContainer'
import { AfterSalesContext } from '../../context/AfterSalesContext';

const InputDataContainer = () => {
    const {
        purchaseCost,
        handlePurchseCost,
        sellPrice,
        handleSellPrice,
        qtySold,
        handleQtySold,
        cancelOrder,
        handleCancelOrder,
        rtoCost,
        handleRtoCost,
        rtoProduct,
        handleRtoProduct,
        facebookCost,
        handleFacebookCost,
      } = useContext(AfterSalesContext)

    const inputFields = [
        { name: 'purchase price', state: purchaseCost, handler: handlePurchseCost, min: 0, max: 1500 },
        { name: 'sell price', state: sellPrice, handler: handleSellPrice, min: 0, max: 1500 },
        { name: 'quantity sold', state: qtySold, handler: handleQtySold, min: 0, max: 500 },
        { name: 'No. of cancelled orders', state: cancelOrder, handler: handleCancelOrder, min: 0, max: 1000 },
        { name: 'RTO Cost', state: rtoCost, handler: handleRtoCost, min: 0, max: 1500 },
        { name: 'No. of RTO products', state: rtoProduct, handler: handleRtoProduct, min: 0, max: 100 },
        { name: 'Facebook total cost', state: facebookCost, handler: handleFacebookCost, min: 0, max: 50000 },
      ];
  return (
    <div className="min-w-[40%] border-secondary border-dashed border-4 rounded-lg  px-10 py-2 flex flex-col gap-1 font-spline">
        {inputFields.map((field, index) => (
        <InputTypeContainer
          key={index}z
          name={field.name}
          value={field.state}
          handleOnChange={field.handler}
          min={field.min}
          max={field.max}
        />
      ))}
  </div>
  )
}

export default InputDataContainer