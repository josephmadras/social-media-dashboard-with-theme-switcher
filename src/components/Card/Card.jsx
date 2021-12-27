import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import cardStyle from "./Card.module.css";

const Card = (props) => {
  const [{ theme, isDark }] = useContext(ThemeContext);
  const {
    socialMediaIcon,
    socialBgColor,
    arrow,
    username,
    users,
    userType,
    topBorder,
    days,
    daysColor,
  } = props;

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

        <strong
          className={cardStyle.name}
          style={{ color: theme.textGrayishColor }}
        >
          {username}
        </strong>
      </div>
      <h4
        className={cardStyle.stat}
        style={{ color: isDark ? theme.textWhiteColor : theme.textBlueColor }}
      >
        {users}
      </h4>
      <div
        className={cardStyle.followers}
        style={{ color: theme.textGrayishColor }}
      >
        {userType}
      </div>

      <div className={cardStyle.days} style={{ color: daysColor }}>
        {arrow} {days} Today
      </div>
    </div>
  );
};

Card.defaultProps = {
  daysColor: "hsl(163, 72%, 41%)",
};
export default Card;
