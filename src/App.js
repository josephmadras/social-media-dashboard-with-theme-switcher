import { Card, DailyOverview, Header } from "./components";
import { data, daily } from "./data";
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
          {daily.map(({ evolution, socialIcon, stats, title }, id) => {
            return (
              <DailyOverview
                key={id}
                title={title}
                socialIcon={socialIcon}
                stats={stats}
                evolution={evolution}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
