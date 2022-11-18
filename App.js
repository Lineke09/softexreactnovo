
import Pessoa from './components/Pessoa'
import Empresa from "./Pages/Empresa";
import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from "react"


export default function App() {
  const [numero, setNumero] = useState(0)

  useEffect(() => {

  })
 

  return (
    <div className="App">
      <header className="App-header">
      <Pessoa/>
      <h1> Matheus Lineke</h1>
      <button onClick={() => setNumero(item => item + 1)}> Aumentar </button>
      <br/><br/>
      <h2>Numero {numero} </h2>
    
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact='true'element={<Home/>}></Route>
          <Route path="/empresa" element={<Empresa/>}></Route>
        </Routes>
      </Router>
      </header>
    </div>
    
  );
}
 
