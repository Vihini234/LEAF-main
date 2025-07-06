import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Login from "./Pages/login.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">MyApp</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
           
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
