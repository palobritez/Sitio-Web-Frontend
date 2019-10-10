import React from 'react';
import './App.css';
import axios from 'axios';


class SearchPeople extends React.Component {

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
        
                <TextField
                id="standard-name"
                label="Nombre"
                value={task.name || ''}
                onChange={this.handleChange('name')}
                margin="normal"
                />
                
            }      
        
        
}
