import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import cardStyle from "./Card.module.css";

const Card = (props) => {
  const {
    socialMediaIcon,
    socialBgColor,
    arrow,
    username,
    users,
    userType,
    days,
    topBorder,
  } = props;

  const [{ theme, isDark }] = useContext(ThemeContext);

  return (
    <div
      className={cardStyle.card}
      style={{
        borderTopColor: topBorder,
        borderImage: topBorder,
        backgroundColor: theme.cardBackground,
      }}
    >
      <div className={cardStyle.username}>
        <div
          className={cardStyle.socialMediaIcon}
          style={{ background: socialBgColor }}
        >
          {socialMediaIcon}
        </div>
        <strong className={cardStyle.name}>{username}</strong>
      </div>
      <h4
        className={cardStyle.stat}
        style={{ color: isDark ? theme.textWhiteColor : theme.textBlueColor }}
      >
        {users}
      </h4>
      <div className={cardStyle.followers}>{userType}</div>
      <div className={cardStyle.days}>
        {arrow} {days} Today
      </div>
    </div>
  );
};

export default Card;
