import InputDataContainer from "../components/InputData/InputDataContainer";
import DisplayContainer from "../components/DisplayComponent/DisplayContainer";

const AfterSalesCalculation = () => {
  return (
    <section className="container md:max-w-7xl mx-auto md:mt-10 mt-0 ">
      <div className="flex flex-col md:flex-row justify-between gap-4 px-6 py-10 md:py-4">
        <InputDataContainer />
        <DisplayContainer />
      </div>
    </section>
  );
};

export default AfterSalesCalculation;
