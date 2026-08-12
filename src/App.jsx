import { useState } from "react";
import ActivityBar from "./components/layout/ActivityBar";
import Explorer from "./components/layout/Explorer";
import EditorTabs from "./components/layout/EditorTabs";
import StatusBar from "./components/layout/StatusBar";
import HomePage from "./components/home/HomePage";

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
            <HomePage />
          </div>
        </section>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
