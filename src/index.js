import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from '../src/context/ContextProvider';
import { InicializationWraper } from './InicializationWraper';


ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <InicializationWraper>
          <App />
        </InicializationWraper>
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);


