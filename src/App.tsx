import React from "react";
import { Markdown } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Markdown url="/resume/resume.md" />
    </div>
  );
}

export default App;
