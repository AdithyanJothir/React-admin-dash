import React from 'react';
import ReactDOM  from 'react-dom';
import { ContextProvider } from './context/ContextProvider';

import './index.css';
import App from './App.js';

ReactDOM.render(
    
      <ContextProvider>
        <App />
      </ContextProvider>,
    document.getElementById('root')
  );