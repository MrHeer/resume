import React from 'react';
import { Markdown } from './components'

function App() {
  return (
    <div className="App">
      <Markdown filePath="./resume.md" />
    </div>
  );
}

export default App;
