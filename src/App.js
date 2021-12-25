import "./App.css";
import { Switch } from "@chakra-ui/switch";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="heading"> Social Media Dashboard</h1>
        <strong className="total-followers">Total Followers: 23,004</strong>

        <div>
          <h3>Dark Mode</h3>
          <Switch size="md" />
        </div>
      </header>

      <main>
        <div className="global">
          <div className="card card1"> @nathanf 1987 Followers 12 Today</div>
          <div className="card card2"> @nathanf 1044 Followers 99 Today</div>
          <div className="card card3">
            {" "}
            @realnathanf 11k Followers 1099 Today
          </div>
          <div className="card card4">Nathan F. 8239 Subscribers 144 Today</div>
        </div>

        <div className="overview">
          <h2>Overview - Today</h2>
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
