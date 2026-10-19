import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

return (
  <div className="dashboard-layout">
    <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

    {menuOpen && (
      <div className="side-menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/builder">Build Portfolio</Link>
        <Link to="/preview">Preview Portfolio</Link>
        <Link to="/">Home</Link>
      </div>
    )}

    

      <main className="dashboard-main">
        <h1>Welcome back, Thendo</h1>
        <p>Manage your professional portfolio from one clean workspace.</p>

        <div className="completion-box">
          <h3>Portfolio Completion</h3>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <p>75% completed</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Add your bio, contact details and professional title.</p>
          </div>

          <div className="dashboard-card">
            <h3>Projects</h3>
            <p>Showcase your software projects and GitHub links.</p>
          </div>

          <div className="dashboard-card">
            <h3>Skills</h3>
            <p>Add languages, tools, certificates and technologies.</p>
          </div>

          <div className="dashboard-card">
            <h3>CV</h3>
            <p>Upload your latest CV for recruiters to download.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;