import React from 'react';
import ReactDOM  from 'react-dom';
import { ContextProvider } from './context/ContextProvider';
import { AuthProvider } from './context/AuthContext';

import './index.css';
import App from './App.js';

ReactDOM.render(
      <AuthProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </AuthProvider>
      ,
    document.getElementById('root')
  );