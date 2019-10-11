import React from 'react';
import './App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

class productos extends React.Component {

    state = {
        Nombre: '',
        Descripcion: '',
        Imagen: '',
        }
        componentDidMount() {
            axios.get('/ws/rest/productos')
            .then(res => {
              const productos = res.data.map(productos => ({value: productos.id, name: productos.name}))
              this.setState({ productos: res.data });
            })
            .catch(err => {
              console.log(err);
            });
          const { match } = this.props;
        }
        
            render() {
              return(
             <> 
                <TextField
                id="standard-name"
                label="Nombre"
                value={productos.name || ''}
                onChange={this.handleChange('name')}
                margin="normal"
                />
       
           </> 
              )         
            }     

        
        
}
export default productos;