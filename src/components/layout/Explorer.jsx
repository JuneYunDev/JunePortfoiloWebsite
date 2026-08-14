import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import {
  ChevronDown,
  ChevronRight,
  Code2,
  Monitor,
  Smartphone,
  UserRound,
  Briefcase,
  GraduationCap,
  Image,
  FileText,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioProjects, aboutItems } from "../../data/portfolioData";

function Explorer() {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);
  const [designOpen, setDesignOpen] = useState(true);

  const getProjectIcon = (type) => {
    if (type === "javascript") {
      return <span className="js-icon">JS</span>;
    }

    if (type === "mobile") {
      return <Smartphone size={16} />;
    }

    return <Monitor size={16} />;
  };

  const getAboutIcon = (id) => {
    switch (id) {
      case "about":
        return <UserRound size={16} />;

      case "skills":
        return <Code2 size={16} />;

      case "experience":
        return <Briefcase size={16} />;

      case "education":
        return <GraduationCap size={16} />;

      default:
        return null;
    }
  };

  return (
    <aside className="explorer">
      <div className="explorer__title">EXPLORER</div>

      <div className="explorer__workspace">
        <div className="explorer__root">
          <ChevronDown size={16} />
          <span>June Yun</span>
        </div>

        <div className="explorer__section">
          <button
            className="explorer__folder"
            onClick={() => setPortfolioOpen(!portfolioOpen)}
          >
            {portfolioOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}

            <span>Portfolio</span>
          </button>

          {portfolioOpen && (
            <div className="explorer__children">
              {portfolioProjects.map((project) =>
                project.external ? (
                  <a
                    key={project.id}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="explorer__item"
                  >
                    {getProjectIcon(project.type)}

                    <span>{project.name}</span>

                    <ExternalLink
                      size={13}
                      className="explorer__external-icon"
                    />
                  </a>
                ) : (
                  <Link
                    key={project.id}
                    to={project.path}
                    className="explorer__item"
                  >
                    {getProjectIcon(project.type)}
                    <span>{project.name}</span>
                  </Link>
                ),
              )}
            </div>
          )}
        </div>

        <div className="explorer__section">
          <button
            className="explorer__folder"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            {aboutOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}

            <span>About</span>
          </button>

          {aboutOpen && (
            <div className="explorer__children">
              {aboutItems.map((item) => (
                <Link to={item.path} className="explorer__item" key={item.id}>
                  {getAboutIcon(item.id)}

                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="explorer__section">
          <button
            className="explorer__folder"
            onClick={() => setDesignOpen(!designOpen)}
          >
            {designOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}

            <span>Design</span>
          </button>

          {designOpen && (
            <div className="explorer__children">
              <Link to="/design" className="explorer__item">
                <Image size={16} />
                <span>Application UI Design</span>
              </Link>
            </div>
          )}
        </div>

        <Link to="/mini-projects" className="explorer__single-item">
          <Code2 size={16} />
          <span>Mini Projects</span>
        </Link>

        <Link to="/resume" className="explorer__single-item">
          <FileText size={16} />
          <span>Resume</span>
        </Link>

        <Link to="/contact" className="explorer__single-item">
          <Mail size={16} />
          <span>Contact</span>
        </Link>

        <div className="explorer__divider" />

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="explorer__single-item"
        >
          <FaGithub size={17} />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="explorer__single-item"
        >
          <FaLinkedin size={17} />
          <span>LinkedIn</span>
        </a>
      </div>
    </aside>
  );
}

export default Explorer;
