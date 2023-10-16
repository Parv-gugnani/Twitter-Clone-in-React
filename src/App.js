import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar.js";
import TweetBox from "./TweetBox";
import SidebarOption from "./SidebarOption";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
