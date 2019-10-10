import React from 'react';
import logo from './logo.svg';
import { ContainedButtons, SimpleContainer } from "./Catalog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Aboutt from './about';
function Home() {
  return <><h2>CATALOGO</h2><SimpleContainer/></>;
}

function About() {
  return <><h2>ABOUT US</h2><Aboutt/></>;
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

        <Route path="/" exact component={Home}/>
           
        <Route path="/about" component={About}/>


      </Router>
    </div>

  );
}
export default App;
