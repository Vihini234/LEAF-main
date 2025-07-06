import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MyApp</h1>
        <p>Your amazing application starts here</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            View Dashboard
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚀 Fast</h3>
            <p>Lightning fast performance</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>Your data is safe with us</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Works on all devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;