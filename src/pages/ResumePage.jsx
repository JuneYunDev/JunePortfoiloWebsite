import { Download, ExternalLink } from "lucide-react";

import "../styles/resume.css";
import "../styles/resume.css";

function ResumePage() {
  const resumeUrl = "/documents/Resume.pdf";

  return (
    <main className="resume-page">
      <div className="resume-page__header">
        <div>
          <p className="resume-page__label">RESUME</p>
          <h1>June Yun</h1>
          <p className="resume-page__subtitle">Junior Software Developer</p>
        </div>

        <div className="resume-page__actions">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            <ExternalLink size={17} />
            Open PDF
          </a>

          <a
            href={resumeUrl}
            download="June_Yun_Resume.pdf"
            className="resume-button resume-button--primary"
          >
            <Download size={17} />
            Download Resume
          </a>
        </div>
      </div>

      <div className="resume-page__viewer">
        <iframe
          src={resumeUrl}
          title="June Yun Resume"
          className="resume-page__iframe"
        />
      </div>
    </main>
  );
}

export default ResumePage;
