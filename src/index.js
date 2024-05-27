import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
// import { Example1 } from 'components/Example1';
import './index.css';
// import videos from './videos.json';
// import App from './App';
import { Reader } from 'components/Reader/Reader';
import publications from 'publications.json';

const theme = {};

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {/* <Example1 url={videos} /> */}
//       <Reader items={publications} />
//     </ThemeProvider>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Example1 url={videos} /> */}
      <Reader items={publications} />
    </ThemeProvider>
    {/* <App /> */}
  </React.StrictMode>
);
