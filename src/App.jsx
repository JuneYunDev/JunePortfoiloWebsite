import { Routes, Route } from "react-router-dom";

import ActivityBar from "./components/layout/ActivityBar";
import Explorer from "./components/layout/Explorer";
import EditorTabs from "./components/layout/EditorTabs";
import StatusBar from "./components/layout/StatusBar";

import HomePage from "./components/home/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ShoesMarketPage from "./pages/ShoesMarketPage";
import SortingVisualizerPage from "./pages/SortingVisualizerPage";
import ApplicationDesignPage from "./pages/ApplicationDesignPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div className="portfolio-app">
      <header className="portfolio-header">
        <h1>June Yun</h1>
      </header>

      <div className="portfolio-workspace">
        <ActivityBar />
        <Explorer />

        <section className="editor">
          <EditorTabs />

          <div className="editor__content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route
                path="/projects/shoes-market"
                element={<ShoesMarketPage />}
              />
              <Route
                path="/projects/sorting-visualizer"
                element={<SortingVisualizerPage />}
              />
              <Route
                path="/design/application-ui"
                element={<ApplicationDesignPage />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </div>
        </section>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
