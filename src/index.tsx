import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {User} from './context/UserContext'

ReactDOM.render(
  <React.StrictMode>
      <User>
        <App/>
      </User>
  </React.StrictMode>,
  document.getElementById('root')
);

