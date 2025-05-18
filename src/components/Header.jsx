import { useContext } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import DarkMode from "./DarkMode";
import { DarkModeContext } from "../context/DarkMode";
const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  return (
    <section className="relative  min-h-screen ">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-primary mb-8 px-4">
        © Pixel Vista. All rights reserved. Please do not redistribute or claim
        as your own.
      </h1>
      <header className=" md:absolute md:top-1/2 top-0  left-10 md:-translate-x-1/2  transfrom md:-translate-y-1/2  ">
        <ul className="flex font-spline text-md  md:text-xl font-bold text-center justify-center items-center md:rotate-90">
          <li
            className={`${
              location.pathname === "/"
                ? "border-white  border-4  underline underline-offset-4 text-black "
                : "border-dashed border-4"
            }
            ${darkMode === "bumblebee" ? " bg-primary " : " bg-primary"}
             p-2 md:px-6 md:py-6 md:hover:pb-16 transition-all duration-300 `}
          >
            <Link to="/">After Sales Calculation</Link>
          </li>
          <li
            className={`${
              location.pathname === "/find-winning-product"
                ? " border-white border-4  underline underline-offset-4 text-black"
                : "border-dashed border-4"
            } 
            ${darkMode === "bumblebee" ? " bg-primary" : " bg-primary"}
            p-2 md:px-6 md:py-6 md:hover:pb-16 transition-all duration-300`}
          >
            <Link to="/find-winning-product">Find Winning Product</Link>
          </li>
        </ul>
        <div className="md:hidden flex items-center flex-col mt-4 gap-2">
          <h1 className="text-center text-secondary">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </h1>
          <DarkMode />
        </div>
      </header>
      <div className="hidden  absolute top-0 left-0 space-y-2 m-4 p-1  md:flex flex-col justify-center gap-1">
        <h1 className="text-center text-accent font-bold">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </h1>
        <DarkMode />
      </div>
      <Outlet />
    </section>
  );
};

export default Header;
