import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="nombre-producto">Nombre</InputLabel>
        <Input
          id="nombre-producto"
          value={values.nombre}
          onChange={handleChange('nombre')}
          startAdornment={<InputAdornment position="nombre"></InputAdornment>}
        />
      </FormControl>
	  <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="descripcion-producto">Descripcion</InputLabel>
        <Input
          id="descripcion-producto"
          value={values.descripcion}
          onChange={handleChange('descripcion')}
          startAdornment={<InputAdornment position="descripcion"></InputAdornment>}
        />
      </FormControl>
	  <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="precio-producto">Precio</InputLabel>
        <Input
          id="precio-producto"
          value={values.precio}
          onChange={handleChange('precio')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
          id="adornment-weight"
          value={values.weight}
          onChange={handleChange('weight')}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <FormHelperText id="weight-helper-text">Weight</FormHelperText>
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}