import { useLocation } from "react-router-dom";

import {
  UserRound,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  FileText,
  Monitor,
  Smartphone,
  X,
} from "lucide-react";

function EditorTabs() {
  const location = useLocation();

  const getTabInfo = () => {
    switch (location.pathname) {
      case "/":
        return {
          label: "About Me",
          type: "profile",
          icon: <UserRound size={16} />,
        };

      case "/skills":
        return {
          label: "Skills.js",
          type: "javascript",
          icon: <Code2 size={16} />,
        };

      case "/experience":
        return {
          label: "Experience.js",
          type: "javascript",
          icon: <Briefcase size={16} />,
        };

      case "/education":
        return {
          label: "Education.md",
          type: "markdown",
          icon: <GraduationCap size={16} />,
        };

      case "/contact":
        return {
          label: "Contact.jsx",
          type: "react",
          icon: <Mail size={16} />,
        };

      case "/resume":
        return {
          label: "Resume.pdf",
          type: "pdf",
          icon: <FileText size={16} />,
        };

      case "/projects/shoes-market":
        return {
          label: "OnlineShoesMarket.jsx",
          type: "react",
          icon: <Monitor size={16} />,
        };

      case "/projects/sorting-visualizer":
        return {
          label: "SortingVisualizer.jsx",
          type: "javascript",
          icon: <Code2 size={16} />,
        };

      case "/projects/class-registration":
        return {
          label: "ClassRegistration.jsx",
          type: "react",
          icon: <Monitor size={16} />,
        };
    }
  };

  const tab = getTabInfo();

  return (
    <div className="editor-tabs">
      <div className={`editor-tab editor-tab--active ${tab.type}`}>
        {tab.icon}

        <span>{tab.label}</span>

        <X size={15} />
      </div>
    </div>
  );
}

export default EditorTabs;
