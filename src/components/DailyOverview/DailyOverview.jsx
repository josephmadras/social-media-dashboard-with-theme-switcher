import { useContext } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { ThemeContext } from "../../contexts/theme";
import styles from "./DailyOverview.module.css";

const DailyOverview = (props) => {
  const {
    title,
    stats,
    socialIcon,
    evolution,
    arrow,
    evolutionColor,
    socialBgColor,
  } = props;

  const [{ theme, isDark }] = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.cardBackground }}
    >
      <div>
        <h4
          className={styles.heading}
          style={{
            color: theme.textGrayishColor,
          }}
        >
          {title}
        </h4>
        <strong
          className={styles.stats}
          style={{ color: isDark ? theme.textWhiteColor : theme.textBlueColor }}
        >
          {stats}
        </strong>
      </div>
      <div>
        <div
          className={styles.socialIcon}
          style={{ background: socialBgColor }}
        >
          {socialIcon}
        </div>
        <div className={styles.evolution} style={{ color: evolutionColor }}>
          {arrow}
          {evolution}
        </div>
      </div>
    </div>
  );
};

DailyOverview.defaultProps = {
  title: "title",
  stats: "0",
  socialIcon: "icon",
  evolution: "0",
  evolutionColor: "hsl(163, 72%, 41%)",
  socialBgColor: "none",
  arrow: <MdArrowDropUp />,
};
export default DailyOverview;
