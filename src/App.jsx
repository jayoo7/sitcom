/*import { Link } from "react-router-dom";

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

export default App;*/
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
