import cardStyle from "./Card.module.css";

const Card = (props) => {
  const { socialMediaIcon, arrow, username, users, userType, days } = props;
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.username}>
        {socialMediaIcon}
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
