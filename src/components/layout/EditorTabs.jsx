import { UserRound, X } from "lucide-react";

function EditorTabs() {
  return (
    <div className="editor-tabs">
      <div className="editor-tab editor-tab--active">
        <UserRound size={16} />

        <span>About Me</span>

        <X size={15} />
      </div>
    </div>
  );
}

export default EditorTabs;
