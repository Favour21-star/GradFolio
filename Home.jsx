import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-box">
          <p className="badge">Built for graduates, interns and junior developers</p>

          <h1>
            Turn your skills into a professional <span>online portfolio.</span>
          </h1>

          <p>
            GradFolio helps graduates showcase their education, projects,
            certificates, CV and contact details in one clean link for employers.
          </p>

          <div className="home-actions">
            <Link to="/register">
              <button className="hero-btn">Create Your Portfolio</button>
            </Link>

            <Link to="/login" className="text-link">
              Already have an account?
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>1 Link</h2>
          <p>Share everything with employers</p>
        </div>

        <div>
          <h2>5 Minutes</h2>
          <p>Create a clean graduate profile</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Focused on career presentation</p>
        </div>
      </section>

      <section className="features-section">
        <h2>Everything a graduate needs to stand out</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Project Showcase</h3>
            <p>Display your best systems, websites, apps and academic projects.</p>
          </div>

          <div className="feature-card">
            <h3>CV Upload</h3>
            <p>Keep your CV available so recruiters can download it easily.</p>
          </div>

          <div className="feature-card">
            <h3>Skills Profile</h3>
            <p>Highlight your technical skills, tools, certificates and experience.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 GradFolio. Built for young professionals.</p>
      </footer>
    </>
  );
}

export default Home;