import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>GAURAV BAKSHI</h1>
        <div className="subtitle">Internal Developer // Sector C</div>
        <div className="contact-info">
          <a href="mailto:contact@gaurav-hub.com">
            ENCRYPTED_MAIL: contact@gaurav-hub.com
          </a>{" "}
          <br />
          <br />

          <a
            href="https://www.linkedin.com/in/gaurav-bakshi-814260336/"
            target="_blank"
          >
            [ LINKEDIN PROFILE ]
          </a>
        </div>
      </header>

      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2>Internal Developer</h2>
            <h3>Cosmetica Laboratories Inc.</h3>
            <div className="date">OCT 2025 - PRESENT // ACTIVE</div>
            <ul>
              <li>
                Building enterprise workflows in Decisions low-code platform.
              </li>
              <li>
                Implementing REST/SQL integrations for validation automation.
              </li>
              <li>
                Authoring unit tests and release protocols for deployment.
              </li>
              <li>Packaging internal tools into distributable applications.</li>
            </ul>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>IT Help Desk</h2>
            <h3>Cosmetica Laboratories Inc.</h3>
            <div className="date">NOV 2024 - OCT 2025 // COMPLETED</div>
            <ul>
              <li>Managed support requests via ticketing systems.</li>
              <li>Administered Active Directory & Microsoft Intune assets.</li>
              <li>Collaborated on security compliance and system upgrades.</li>
            </ul>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>Computer Programming & Analysis</h2>
            <h3>Seneca Polytechnic</h3>
            <div className="date">SEPT 2020 - APR 2024 // CERTIFIED</div>
            <p>
              <strong>STATUS: HIGH HONORS (GPA 4.0/4.0)</strong>
            </p>
            <p>Focus: Full-Stack Development, Database Management.</p>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="section-header">Technical Authorization</div>
        <br />

        <span className="skill-tag">Python</span>
        <span className="skill-tag">C++</span>
        <span className="skill-tag">C#</span>
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">SQL</span>

        <span className="skill-tag">Docker</span>
        <span className="skill-tag">Azure</span>
        <span className="skill-tag">Unreal Engine 5</span>
        <span className="skill-tag">Git Control</span>
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          color: "#444",
          fontSize: "0.7em",
          fontFamily: "'Courier New', monospace",
        }}
      >
        &copy; 2025 GAURAV BAKSHI | SECURE CONNECTION ESTABLISHED
      </footer>
    </>
  );
}

export default App;
