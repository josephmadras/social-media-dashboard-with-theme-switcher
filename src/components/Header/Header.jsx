import { useContext } from "react";
import { Switch } from "../../components";
import { ThemeContext } from "../../contexts/theme";
import headerStyle from "./Header.module.css";

const Header = () => {
  const [{ theme, isDark }] = useContext(ThemeContext);
  return (
    <header>
      <div>
        <h1
          className={headerStyle.heading}
          style={{ color: isDark ? theme.textWhiteColor : theme.textBlueColor }}
        >
          Social Media Dashboard
        </h1>

        <strong
          className={headerStyle.totalFollowers}
          style={{
            color: theme.textGrayishColor,
            borderBottom: `1px solid ${
              isDark ? theme.textGrayishColor : theme.textBlueColor
            }`,
          }}
        >
          Total Followers: 23,004
        </strong>
      </div>
      <div className={headerStyle.darkMode}>
        <h3 style={{ color: theme.textGrayishColor }}>Dark Mode</h3>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
