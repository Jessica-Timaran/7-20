import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Principal/login';
import Pedidos from './assets/pages/Meseros/Pedidos';
import Inicio from './assets/pages/Meseros/Inicio';
import VerPedidos from './assets/pages/Meseros/VerPedidos';
import Dashboard from './assets/pages/Admin/Dashboard';
import Menu from './assets/pages/Meseros/Menu';
import Registro from './assets/pages/Principal/Registro';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas de Usuario protegida */}
        <Route path="/" element={<Login />} />
        
         {/* Admin*/}
         <Route path="/Registro" element={<Registro />} />
        
        {/* Meseros */}
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/VerPedidos" element={<VerPedidos />} />

        {/* Admin */}
        <Route path="/Dashboard" element={<Dashboard />} />

       

        {/* Ruta por defecto (404) */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
