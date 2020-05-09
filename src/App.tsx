import React from 'react';
import { Markdown } from './components'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './App.css';

function App() {

  return (
    <div className="App">
      <a className='download' href='/resume/resume.pdf' target='_blank'>
        <Button shape="circle" icon={<DownloadOutlined />}
          size='large' />
      </a>
      <Markdown filePath="/resume/resume.md" />
    </div>
  );
}

export default App;
