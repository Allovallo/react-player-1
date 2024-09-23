import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import { Example1 } from './components/Example1';
import './index.css';
import videos from './videos.json';
// import { Reader } from 'components/Reader/Reader';
// import publications from 'publications.json';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Example1 url={videos} />
      {/* <Reader items={publications} /> */}
    </ThemeProvider>
  </React.StrictMode>
);
