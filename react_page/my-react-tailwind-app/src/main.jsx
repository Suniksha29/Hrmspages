// src/main.jsx (Corrected Version)

import React, { StrictMode } from 'react'; // Import React and StrictMode together
import { createRoot } from 'react-dom/client';
import './index.css'; // This is the critical line that imports your Tailwind CSS
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);