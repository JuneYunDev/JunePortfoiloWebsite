import "../styles/skills.css";

function SkillsPage() {
  return (
    <main className="skills-page">
      <div className="skills-code">
        <p>
          <span className="keyword">const</span>{" "}
          <span className="variable">skills</span> = {"{"}
        </p>

        <div className="code-indent">
          <p>
            <span className="property">languages</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"JavaScript",</p>
            <p className="string">"TypeScript",</p>
            <p className="string">"HTML",</p>
            <p className="string">"CSS",</p>
            <p className="string">"SQL",</p>
            <p className="string">"Java"</p>
          </div>

          <p>],</p>

          <p>
            <span className="property">frontend</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"React",</p>
            <p className="string">"React Router",</p>
            <p className="string">"Responsive Web Design"</p>
          </div>

          <p>],</p>

          <p>
            <span className="property">backend</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"Node.js",</p>
            <p className="string">"Express.js",</p>
            <p className="string">"REST APIs"</p>
          </div>

          <p>],</p>

          <p>
            <span className="property">database</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"MySQL",</p>
            <p className="string">"Firebase"</p>
          </div>

          <p>],</p>

          <p>
            <span className="property">tools</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"Git",</p>
            <p className="string">"GitHub",</p>
            <p className="string">"VS Code",</p>
            <p className="string">"Figma",</p>
            <p className="string">"Postman"</p>
          </div>

          <p>],</p>

          <p>
            <span className="property">development</span>: [
          </p>

          <div className="code-indent">
            <p className="string">"CRUD Operations",</p>
            <p className="string">"Authentication",</p>
            <p className="string">"Role-Based Access Control",</p>
            <p className="string">"Relational Database Design",</p>
            <p className="string">"REST API Integration",</p>
            <p className="string">"Agile / SDLC"</p>
          </div>

          <p>]</p>
        </div>

        <p>{"};"}</p>
      </div>
    </main>
  );
}

export default SkillsPage;
