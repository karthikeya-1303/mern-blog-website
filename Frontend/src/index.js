import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import AuthContextProvider from './Context/AuthContext';

const rootElement = document.getElementById('root'); // Get the root element
if (!rootElement) throw new Error('Root element not found'); // Optional: safety check
const root = createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);