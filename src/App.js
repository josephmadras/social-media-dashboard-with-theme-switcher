import { Card, DailyOverview, Header } from "./components";
import { data } from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="global">
          {data.map(
            ({
              id,
              username,
              users: { number, type },
              days,
              icon,
              socialBgColor,
              arrow,
              topBorder,
            }) => (
              <Card
                key={id}
                username={username}
                users={number}
                userType={type}
                days={days}
                socialMediaIcon={icon}
                arrow={arrow}
                socialBgColor={socialBgColor}
                topBorder={topBorder}
              />
            )
          )}
        </div>

        <div className="overview">
          <h2>Overview - Today</h2>
          <DailyOverview />
          <div className="small-card small-card1"> Page Views 87 3%</div>
          <div className="small-card small-card2"> Likes 52 2%</div>
          <div className="small-card small-card3"> Likes 5462 2257%</div>
          <div className="small-card small-card4"> Profile Views 52k 1375%</div>
          <div className="small-card small-card5"> Retweets 117 303%</div>
          <div className="small-card small-card6"> Likes 507 553%</div>
          <div className="small-card small-card7"> Likes 107 19%</div>
          <div className="small-card small-card8"> Total Views 1407 12%</div>
        </div>
      </main>
    </div>
  );
}

export default App;
