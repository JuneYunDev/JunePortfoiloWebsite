import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { portfolioProjects } from "../data/portfolioData";

import "../styles/project.css";

function SortingVisualizerPage() {
  const project = portfolioProjects.find(
    (project) => project.id === "sorting-visualizer",
  );

  return (
    <main className="project-page">
      <section className="project-page__header">
        <p className="project-page__type">JavaScript Algorithm Project</p>

        <h1>Sorting Algorithm Visualizer</h1>

        <p className="project-page__description">
          An interactive React application that visualizes sorting algorithms
          step by step.
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
          <span>Vite</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </section>

      <section className="project-page__section">
        <h2>Algorithms</h2>

        <ul>
          <li>Bubble Sort</li>
          <li>Selection Sort</li>
          <li>Insertion Sort</li>
          <li>Merge Sort</li>
          <li>Quick Sort</li>
          <li>Heap Sort</li>
        </ul>
      </section>

      <section className="project-page__section">
        <h2>Key Features</h2>

        <ul>
          <li>Step-by-step sorting visualization</li>
          <li>Play and pause controls</li>
          <li>Forward and backward navigation</li>
          <li>Adjustable array size</li>
          <li>Keyboard controls</li>
          <li>Responsive mobile controls</li>
        </ul>
      </section>
    </main>
  );
}

export default SortingVisualizerPage;
