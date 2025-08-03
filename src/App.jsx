import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome</h1>
      <Link to="/view-shorts">
        <button>View Shorts</button>
      </Link>
    </div>
  );
}

export default App;
