import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Juego from './components/juego';
import Integrantes from './components/Integrantes';
import Despedida from './components/despedida';
import Inicio from './components/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);