import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/login';
import Pedidos from './assets/pages/Meseros/Pedidos'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/Pedidos" element={<Pedidos/>} />
      </Routes>
    </Router>
  );
}

export default App;