import { useContext } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import DarkMode from "./DarkMode";
import { DarkModeContext } from "../context/DarkMode";
const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  return (
    <section className="relative  min-h-screen ">
      <div className="flex flex-col items-center justify-center gap-2 bg-red-100 border-l-8 border-red-500 text-red-700 shadow-lg rounded-lg p-6 mb-8 mx-4">
        <div className="flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
          <span className="text-lg md:text-2xl font-extrabold">Warning</span>
        </div>
        <div className="text-base md:text-lg font-semibold text-center">
          © PixelVista. All rights reserved.
          <br />
          Unauthorized copying, redistribution, or claiming of this content is
          strictly prohibited.
          <br />
          Violators will face immediate and decisive legal action.
        </div>
        <div className="mt-3 text-center text-sm md:text-base">
          Interested in purchasing property rights? Contact me on{" "}
          <a
            href="https://www.linkedin.com/in/vivek-kumar-0b7208221/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline font-bold hover:text-blue-900"
          >
            LinkedIn
          </a>
          .
        </div>
      </div>
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
      <div className="hidden  absolute top-20 left-0 space-y-2 m-4 p-1  md:flex flex-col justify-center gap-1">
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
