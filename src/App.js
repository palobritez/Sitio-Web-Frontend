import React from 'react';
import logo from './logo.svg';
import { ContainedButtons, Grids } from "./Catalog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
  return <h2>Catalogo</h2>;
}

function About() {
  return <h2>About us</h2>;
}


function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          
          <p>
          CATALOGO
          <ContainedButtons/>
          </p>
        </header>    
        <body>
          <Grids/>
        </body>

        <Route path="/" exact component={Home}/>
           
        <Route path="/about" component={About}/>

      </Router>
    </div>

  );
}
export default App;
