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
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IntegrationTextField from './formulario';



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
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  
  }));

  
 export function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
<Cards/>
        </Container>
      </React.Fragment>
    );
  }
  
  // Funcion que recrea los links o rutas que tendran los botones para que las pantallas se ajusten a lo que se debe estar
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

        </div>
    );
    }
// Funcion que recrea los grids que serán conectados al backend para recolectar sus datos e imagenes
  // export  function Grids() {
  //     const classes = useStyles();
      
  //     return (
  //       <div className={classes.root}>
  //         <GridList cellHeight={180} className={classes.gridList}>
  //           <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
  //             <ListSubheader component="div"></ListSubheader>
  //           </GridListTile>
  //           {tileData.map(tile => (
  //             <GridListTile key={tile.img}>
  //               <img src={tile.img} alt={tile.title} />
  //               <GridListTileBar
  //                 title={tile.title}
  //                 subtitle={<span>Precio: {tile.precio}</span>}
  //                 actionIcon={<IconButton>
  //                   <StarBorderIcon className={classes.title} />
  //                 </IconButton>} />
  //                 }
  //               />
  //             </GridListTile>
  //           ))}
  //         </GridList>
  //       </div>
  //     );
  //   }
    // TODO
// Mejorar los grids para poder marcar favoritos (todos los archivos son sacados de material-ui de la version 4.5.0) 
function Form(){
  return(
    <IntegrationTextField/>
  );
}

export default function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
        <IconButton aria-label="settings" onClick = "<IntegrationTextField/>">
            <Edit>
              </Edit>
          </IconButton>
        }
        title="Prueba"
      />
      <CardMedia
        className={classes.media}
        image="https://ichef.bbci.co.uk/images/ic/640x360/p0659ssc.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <a>
Montaña del Himalaya
        </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton arial-label="Delete" onClick = "">
        <DeleteIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          Descripcion del producto
        </CardContent>
      </Collapse>
    </Card>
  );
}