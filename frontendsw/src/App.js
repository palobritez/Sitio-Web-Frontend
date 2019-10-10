import React from 'react';
import { ContainedButtons, Grids } from "./Catalog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Productos from './Productos.js';
import {withStyles} from './Formulario.js';
import { InputAdornment } from '@material-ui/core';
import InputAdornments from './Formulario.js'

function Home() {
  return <><h2>CATALOGO</h2>
  <Grids/></>;
}

function About() {
  return <h2>About us</h2>;
}

function Formulario() {
  return <><h2>Nuevo formulario</h2>
  <InputAdornments/></>;
}
function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          
          <p>
          <ContainedButtons/>
          </p>
        </header>    
       <body>
       <Productos/>
         </body> 

        <Route path="/" exact component={Home}/>
           
        <Route path="/about" component={About}/>

        <Route path="/formulario" component={Formulario}/>

      </Router>
    </div>

  );
  }

export default App;
