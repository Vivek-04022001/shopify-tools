import Header from "./components/Header";
import AfterSalesCalculation from "./pages/AfterSalesCalculation";
import FindWinningProduct from "./pages/FindWinningProduct";
import { useEffect, useContext } from "react";
import { DarkModeContext } from "./context/DarkMode";

import { Link, Route, Routes, useLocation } from "react-router-dom";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    // Update the HTML tag when dark mode changes
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "synthwave" : "bumblebee"
    );
  }, [darkMode]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AfterSalesCalculation />} />
{/*           <Route path="find-winning-product" element={<FindWinningProduct />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
