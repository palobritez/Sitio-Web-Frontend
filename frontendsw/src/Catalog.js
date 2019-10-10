import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData.js';


// Constantes que utilizan los estilos y formas que van a tener los botones y grids creados dentro de App.js al ser llamados
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
  // Funcion que reacrea los links o rutas que tendran los botones para que las pantallas se ajusten a lo que se debe estar
  // mostrano en ese momento
 export function ContainedButtons() {
    const classes = useStyles();
    return (
      <div>
        <Button variant="contained" className={classes.button}>
        <Link to="/">Home</Link>
        </Button>
  
        <Button variant="contained" className={classes.button}>
        <Link to="/about">About</Link>
        </Button>

        <Button variant="contained" className={classes.button}>
        <Link to="/formulario">Formulario</Link>
        </Button>

        </div>
    );
    }
// Funcion que recrea los grids que serán conectados al backend para recolectar sus datos e imagenes
  export  function Grids() {
      const classes = useStyles();
      
      return (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div"></ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Precio: {tile.precio}</span>}
                  actionIcon={<IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>} />
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
    // TODO
// Mejorar los grids para poder marcar favoritos (todos los archivos son sacados de material-ui de la version 4.5.0) 