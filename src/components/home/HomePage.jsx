import {
  FolderOpen,
  Download,
  Code2,
  Database,
  Palette,
  Rocket,
} from "lucide-react";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1>
            Hello, I&apos;m <span>June Yun</span>
          </h1>

          <h2>
            Junior <span>Full Stack Developer</span>
          </h2>

          <div className="home-hero__description">
            <p>
              I build responsive web applications with JavaScript, React,
              Node.js, and relational databases.
            </p>

            <p>
              I enjoy turning ideas into functional applications — from UI/UX
              design and database modeling to frontend and backend development.
            </p>

            <p>Currently based in Calgary, Canada.</p>
          </div>

          <div className="home-hero__buttons">
            <a
              href="https://github.com/JuneYunDev/JunePortfoiloWebsite"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <FolderOpen size={18} />
              View GitHub
            </a>

            <a
              href="/documents/Resume.pdf"
              download="June_Yun_Resume.pdf"
              className="secondary-button"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="home-hero__photo">
          <img src="/Profile.jpg" alt="June Yun" className="profile-photo" />
        </div>
      </section>

      <section className="developer-summary">
        <article className="summary-card">
          <Code2 size={38} />

          <h3>Full Stack Development</h3>

          <p>
            Building end-to-end web applications with modern JavaScript
            technologies.
          </p>
        </article>

        <article className="summary-card">
          <Database size={38} />

          <h3>Database & API Integration</h3>

          <p>
            Designing relational databases and building RESTful APIs with
            Node.js and Express.
          </p>
        </article>

        <article className="summary-card">
          <Palette size={38} />

          <h3>UI/UX & Design</h3>

          <p>
            Creating intuitive interfaces with Figma and focusing on
            user-centered design.
          </p>
        </article>

        <article className="summary-card">
          <Rocket size={38} />

          <h3>Problem Solver</h3>

          <p>
            I enjoy challenging problems and strive to find clean, efficient
            solutions.
          </p>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
