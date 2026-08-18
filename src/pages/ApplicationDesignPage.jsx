import { ExternalLink, Download } from "lucide-react";
import "../styles/applicationDesign.css";

function ApplicationDesignPage() {
  return (
    <main className="design-page">
      <div className="design-page__header">
        <div>
          <p className="design-page__type">UI / UX Design Project</p>

          <h1>Application UI Design</h1>

          <p>
            Application interface designs created with Figma, focusing on
            usability, layout, and visual consistency.
          </p>
        </div>

        <div className="design-page__actions">
          <a
            href="/documents/ApplicationDesign.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
            Open PDF
          </a>

          <a href="/documents/ApplicationDesign.pdf" download>
            <Download size={18} />
            Download
          </a>
        </div>
      </div>

      <div className="design-page__viewer">
        <iframe
          src="/documents/ApplicationDesign.pdf"
          title="Application UI Design Portfolio"
        />
      </div>
    </main>
  );
}

export default ApplicationDesignPage;
