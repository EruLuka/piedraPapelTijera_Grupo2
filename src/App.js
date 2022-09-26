import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Inicio from './routes/Inicio';
import Integrantes from "./routes/Integrantes";
import Juego from './routes/juego';
import Despedida from "./routes/despedida";
import Barra from './routes/Barra';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Barra/>}>
          <Route index element={<Inicio/>}/>
          <Route path='juego' element={<Juego/>}/>
          <Route path='integrantes' element={<Integrantes/>}/>
          <Route path='despedida' element={<Despedida/>}/>
          <Route path='*' element={<Navigate replace to="/"/>}/> 
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;