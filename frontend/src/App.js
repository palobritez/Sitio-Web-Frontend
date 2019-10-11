import React from 'react';
import logo from './logo.svg';
import { ContainedButtons, SimpleContainer } from "./Catalog";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Aboutt from './about';
import Button from '@material-ui/core/Button';

function Home({match}) {
  
  return (
  <>

  <Route exact path="/" component={SimpleContainer} />
  <Route exact path={`${match.path}/edit/:idProducto`} component={SimpleContainer} />

  </>
  );

}

 function About() {
   return <><h2>ABOUT US</h2><Aboutt/></>;
 }


function Añadir() {
  return <><h2>Añadir Producto</h2></>;
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
        <Route exact path="/about" component={About}/>
 
   
      </Router>
    </div>

  );
}
export default App;
