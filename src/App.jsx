import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="nav-link">
          <a href="/" className="back-link">← Back to Main Site</a>
        </div>
        <h1>Garry Gao</h1>
        <p>Software Development Engineer at Amazon</p>
        <p className="version-badge">Interactive Version</p>
      </header>

      <main className="main-content">
        <section className="about">
          <h2>About</h2>
          <p>
            I am a Software Development Engineer at Amazon.com, Inc. based in Seattle, WA. 
            I hold a Master of Engineering from UC Berkeley and a Bachelor of Arts from Grinnell College. 
            My interests lie in software development, machine learning, and robotics.
          </p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>University of California, Berkeley</h3>
            <p><em>Aug 2023 - May 2024</em></p>
            <p>Master of Engineering, Concentration in Control of Robotic and Autonomous Systems</p>
          </div>
          <div className="education-item">
            <h3>Grinnell College</h3>
            <p><em>Aug 2019 - May 2022</em></p>
            <p>Bachelor of Arts, Computer Science & Physics (Honors)</p>
          </div>
        </section>

        <section className="experience">
          <h2>Recent Experience</h2>
          <div className="experience-item">
            <h3>Amazon.com, Inc.</h3>
            <p><strong>Software Development Engineer</strong> | <em>April 2025 - Current</em></p>
          </div>
          <div className="experience-item">
            <h3>Lawrence Berkeley National Lab</h3>
            <p><strong>Machine Learning Engineer</strong> | <em>May 2024 - April 2025</em></p>
          </div>
        </section>

        <section className="publications">
          <h2>Publications</h2>
          <div className="publication-item">
            <h3>FLEX: A Multi-task Diffusion Model for Fluid Flows</h3>
            <p><em>October 2024</em></p>
          </div>
          <div className="publication-item">
            <h3>Cascading Failures and the Robustness of Cooperation in a Unified Scale-Free Network Model</h3>
            <p><em>November 2021</em></p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
