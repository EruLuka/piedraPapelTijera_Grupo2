import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Juego from './components/Juego';
import Integrantes from './components/Integrantes';
import Despedida from './components/Despedida'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Juego />
  </React.StrictMode>
);