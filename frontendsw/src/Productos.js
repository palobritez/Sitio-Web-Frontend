import './App.css';
import axios from 'axios';
import React from 'react';

    class Productos extends React.Component {
     
      state = {
        productos: [
        ]
      };
      
      componentDidMount(){
        axios.get('/ws/rest/productos/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        })
      };

    render(){
      return(
        <ul>
          {this.state.productos.map(productos => <li>(productos.name) </li>)}
        </ul>
      )
      }
    }

    export default Productos;