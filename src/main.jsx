import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/SesionAuthContext';
import { PersonalizarCarteraProvider } from './context/PersonalizarCarteraContext'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PersonalizarCarteraProvider> 

        <App />
      
      </PersonalizarCarteraProvider>
    </AuthProvider>
  </React.StrictMode>
);
