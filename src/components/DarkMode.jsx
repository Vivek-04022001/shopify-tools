
import {useContext} from "react";
import { DarkModeContext } from "../context/DarkMode";

const DarkMode = () => {
    const {toggleDarkMode, darkMode} = useContext(DarkModeContext)
  return (
    <input
      type="checkbox"
      className="toggle toggle-lg md:toggle-xl toggle-primary "
      checked={darkMode}
      onChange={toggleDarkMode}
    />
  );
};

export default DarkMode;
