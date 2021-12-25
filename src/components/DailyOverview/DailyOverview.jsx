import { MdArrowDropUp } from "react-icons/md";
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
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.heading}>{title}</h4>
        <strong className={styles.stats}>{stats}</strong>
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
