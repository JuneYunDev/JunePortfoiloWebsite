import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { portfolioProjects } from "../data/portfolioData";

import "../styles/project.css";

function ShoesMarketPage() {
  const project = portfolioProjects.find(
    (project) => project.id === "shoes-market",
  );

  return (
    <main className="project-page">
      <section className="project-page__header">
        <p className="project-page__type">Full Stack E-Commerce Project</p>

        <h1>Online Shoes Market</h1>

        <p className="project-page__description">
          A full-stack e-commerce website built with React, JavaScript, Node.js,
          Express, and MySQL.
        </p>

        <div className="project-page__actions">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="project-button project-button--primary"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </section>

      <section className="project-page__section">
        <h2>Technologies</h2>

        <div className="project-tech-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Figma</span>
        </div>
      </section>

      <section className="project-page__section">
        <h2>Key Features</h2>

        <ul>
          <li>Product browsing and filtering</li>
          <li>Product detail pages</li>
          <li>Shopping cart management</li>
          <li>Checkout workflow</li>
          <li>User authentication</li>
          <li>Admin product management</li>
          <li>CRUD operations</li>
          <li>Relational database integration</li>
        </ul>
      </section>
    </main>
  );
}

export default ShoesMarketPage;
