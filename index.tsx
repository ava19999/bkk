import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext'; // PENTING: Import ini

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* PENTING: App harus dibungkus LanguageProvider */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);