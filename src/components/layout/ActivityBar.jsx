import {
  Files,
  Search,
  GitBranch,
  PlaySquare,
  Blocks,
  UserCircle,
  Settings,
} from "lucide-react";

function ActivityBar() {
  return (
    <aside className="activity-bar">
      <div className="activity-bar__top">
        <button className="activity-bar__button active">
          <Files size={25} />
        </button>

        <button className="activity-bar__button">
          <Search size={25} />
        </button>

        <button className="activity-bar__button">
          <GitBranch size={25} />
        </button>

        <button className="activity-bar__button">
          <PlaySquare size={25} />
        </button>

        <button className="activity-bar__button">
          <Blocks size={25} />
        </button>
      </div>

      <div className="activity-bar__bottom">
        <button className="activity-bar__button">
          <UserCircle size={25} />
        </button>

        <button className="activity-bar__button">
          <Settings size={25} />
        </button>
      </div>
    </aside>
  );
}

export default ActivityBar;
