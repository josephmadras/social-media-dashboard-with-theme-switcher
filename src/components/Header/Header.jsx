import { Switch } from "../../components";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1 className={headerStyle.heading}> Social Media Dashboard</h1>
        <strong className={headerStyle.totalFollowers}>
          Total Followers: 23,004
        </strong>
      </div>
      <div className={headerStyle.darkMode}>
        <h3>Dark Mode</h3>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
