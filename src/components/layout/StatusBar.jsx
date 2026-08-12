import { GitBranch, CircleX, TriangleAlert, Bell } from "lucide-react";

function StatusBar() {
  return (
    <footer className="status-bar">
      <div className="status-bar__left">
        <span>
          <GitBranch size={15} />
          main
        </span>

        <span>
          <CircleX size={15} />0
        </span>

        <span>
          <TriangleAlert size={15} />0
        </span>

        <span>Ready</span>
      </div>

      <div className="status-bar__right">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>{"{}"} JavaScript</span>

        <Bell size={15} />
      </div>
    </footer>
  );
}

export default StatusBar;
