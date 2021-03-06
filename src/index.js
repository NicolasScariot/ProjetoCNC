import React from 'react';
import ReactDOM from 'react-dom';
import Header  from './components/header/index.js';
import Dashboards from './components/circularDashboard/index.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Dashboards></Dashboards>
  </React.StrictMode>,
  document.getElementById('root')
);

