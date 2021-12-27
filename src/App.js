import { Card, DailyOverview, Header } from "./components";
import { data, daily } from "./data";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";

function App() {
  const [{ theme, isDark }] = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
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
              daysColor,
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
                daysColor={daysColor}
              />
            )
          )}
        </div>

        <div className="overview">
          <h2
            style={{
              color: isDark ? theme.textWhiteColor : theme.textGrayishColor,
            }}
          >
            Overview - Today
          </h2>
          <div className="content">
            {daily.map(
              (
                { title, stats, socialIcon, evolution, evolutionColor, arrow },
                id
              ) => {
                return (
                  <DailyOverview
                    key={id}
                    title={title}
                    socialIcon={socialIcon}
                    stats={stats}
                    evolution={evolution}
                    evolutionColor={evolutionColor}
                    arrow={arrow}
                  />
                );
              }
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
