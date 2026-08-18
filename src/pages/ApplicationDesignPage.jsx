import { ExternalLink, Download } from "lucide-react";

import "../styles/applicationDesign.css";

function ApplicationDesignPage() {
  const pdfPath = "/documents/ApplicationDesign.pdf";

  return (
    <main className="design-page">
      <div className="design-page__header">
        <div>
          <p className="design-page__type">UI / UX Design Project</p>

          <h1>Application UI Design</h1>

          <p>
            Mobile application interface designs created for the "Let's Go"
            project, including profile, authentication, event, notification, and
            social interaction screens.
          </p>
        </div>

        <div className="design-page__actions">
          <a href={pdfPath} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Open PDF
          </a>

          <a href={pdfPath} download="ApplicationDesign.pdf">
            <Download size={18} />
            Download
          </a>
        </div>
      </div>

      <div className="design-page__viewer">
        <iframe src={pdfPath} title="Application UI Design Portfolio" />
      </div>
    </main>
  );
}

export default ApplicationDesignPage;
