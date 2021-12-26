import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import switchStyle from "./Switch.module.css";

const Switch = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <label className={switchStyle.switch}>
      <input type="checkbox" onChange={toggleTheme} />
      <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
    </label>
  );
};

export default Switch;
