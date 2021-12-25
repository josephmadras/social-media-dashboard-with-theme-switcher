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
  return (
    <div
      className={cardStyle.card}
      style={{ borderTop: `3px solid ${topBorder}` }}
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
      <h4 className={cardStyle.stat}>{users}</h4>
      <div className={cardStyle.followers}>{userType}</div>
      <div className={cardStyle.days}>
        {arrow} {days} Today
      </div>
    </div>
  );
};

export default Card;
