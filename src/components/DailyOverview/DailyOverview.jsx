import styles from "./DailyOverview.module.css";

const DailyOverview = (props) => {
  const { title, stats, socialIcon, evolution } = props;
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>{title}</h1>
        <strong className={styles.stats}>{stats}</strong>
      </div>
      <div>
        <div className={styles.socialIcon}>{socialIcon}</div>
        <div className={styles.evolution}>{evolution}</div>
      </div>
    </div>
  );
};

export default DailyOverview;
