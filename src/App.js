import { Card, DailyOverview, Header } from "./components";
import { data as user, daily } from "./data";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";

function App() {
  const [{ theme, isDark }] = useContext(ThemeContext);
  const { white, grayish } = theme;

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Header />
      <main>
        <div className="global">
          {user.map((data) => (
            <Card
              key={data.id}
              username={data.username}
              users={data.users.number}
              userType={data.users.type}
              days={data.days}
              socialMediaIcon={data.icon}
              arrow={data.arrow}
              socialBgColor={data.socialBgColor}
              topBorder={data.topBorder}
              daysColor={data.daysColor}
            />
          ))}
        </div>

        <div className="overview">
          <h2 style={{ color: isDark ? white : grayish }}>Overview - Today</h2>
          <div className="content">
            {daily.map((data, id) => {
              return (
                <DailyOverview
                  key={id}
                  title={data.title}
                  socialIcon={data.socialIcon}
                  stats={data.stats}
                  evolution={data.evolution}
                  evolutionColor={data.evolutionColor}
                  arrow={data.arrow}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
