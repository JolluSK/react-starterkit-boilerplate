import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AppConfigProvider from '@/contexts/AppConfigProvider';
import AppProvider from '@/contexts/AppProvider';

import '@/styles/global.css'; // Global styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AppConfigProvider> 
      <AppProvider> 
        <App /> 
        {/* <div>
          <p>Hello world</p>
        </div> */}
      </AppProvider> 
    </AppConfigProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
