import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppContextProvider } from './Context/AppContextProvider';


ReactDOM.render(
  <React.StrictMode>
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

