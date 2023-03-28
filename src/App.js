import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './Pages/Home'
import IMG from './Pages/imgs/index'
import Cadastrar from './Pages/Cadastrar';
import Dados from './Pages/Dados'; 

function App() {


  return (
    <div className='fundo'>
      <div><IMG /></div>
      <div className='cadastro'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastrar" element={<Cadastrar />} />
          <Route path="/Dados" element={<Dados />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
