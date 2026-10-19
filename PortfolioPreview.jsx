import "../App.css";
import { useEffect, useState } from "react";

function PortfolioPreview() {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setMessage("Please login first");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/profile/${user.id}`);
        const data = await response.json();

        if (response.ok) {
          setProfile(data);
        } else {
          setMessage(data.message);
        }
      } catch {
        setMessage("Could not connect to server");
      }
    }

    fetchProfile();
  }, []);

  if (message) {
    return (
      <div className="preview-shell">
        <div className="preview-empty">{message}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="preview-shell">
        <div className="preview-empty">Loading portfolio...</div>
      </div>
    );
  }

  const initials = profile.full_name
    ? profile.full_name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "GF";

  const skillsList = profile.skills
    ? profile.skills.split(",").map((skill) => skill.trim())
    : [];

  return (
    <div className="preview-shell">
      <aside className="preview-sidebar">
        <div className="preview-brand">
          <div className="brand-icon">G</div>
          <h2>GradFolio</h2>
        </div>

        <nav className="preview-nav">
          <a href="#overview">⌂ Overview</a>
          <a href="#about">○ About</a>
          <a href="#skills">☆ Skills</a>
          <a href="#projects">▣ Projects</a>
          <a href="#contact">✉ Contact</a>
        </nav>

        <div className="sidebar-note">
          <div className="rocket">⌁</div>
          <p>Building futures, one portfolio at a time.</p>
          <small>© 2026 GradFolio</small>
        </div>
      </aside>

      <main className="preview-main">
        <section className="profile-hero" id="overview">
          <div className="profile-avatar">{initials}</div>

          <div>
            <h1>{profile.full_name}</h1>
            <p>{profile.title}</p>

            <div className="profile-contact">
              <span>✉ portfolio@email.com</span>
              <span>☎ +27 00 000 0000</span>
              <span>⌖ South Africa</span>
            </div>
          </div>
        </section>

        <section className="preview-two-grid">
          <div className="preview-card" id="about">
            <div className="section-title">
              <span>●</span>
              <h2>About Me</h2>
            </div>
            <p>{profile.bio}</p>
          </div>

          <div className="preview-card">
            <div className="section-title">
              <span>◆</span>
              <h2>Qualification</h2>
            </div>
            <p>{profile.qualification}</p>
          </div>
        </section>

        <section className="preview-card wide-card" id="skills">
          <div className="section-title">
            <span>★</span>
            <h2>Skills</h2>
          </div>

          <div className="modern-skills">
            {skillsList.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="preview-card wide-card" id="projects">
          <div className="section-title">
            <span>▣</span>
            <h2>Projects</h2>
          </div>

          <div className="modern-project">
            <div className="project-icon">⌨</div>
            <div>
              <h3>{profile.project_name}</h3>
              <p>{profile.project_description}</p>
            </div>
          </div>
        </section>

        <section className="preview-contact-card" id="contact">
          <p>Let's connect and build something amazing together.</p>

          <div className="socials">
            <span>in</span>
            <span>GF</span>
            <span>✉</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioPreview;