import "./App.css";
import Sidebar from "./Sidebar.js";
import TweetBox from "./TweetBox";

function App() {
  return (
    <div className="App">
      <Sidebar /> {/* Render the Sidebar component here */}
      <TweetBox />
    </div>
  );
}

export default App;
