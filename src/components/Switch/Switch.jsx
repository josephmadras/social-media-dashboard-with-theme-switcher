import switchStyle from "./Switch.module.css";

const Switch = () => {
  return (
    <label className={switchStyle.switch}>
      <input type="checkbox" />
      <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
    </label>
  );
};

export default Switch;
