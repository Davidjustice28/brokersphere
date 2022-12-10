import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import FunctionalApp from './app-functional'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionalApp />
  </React.StrictMode>
);