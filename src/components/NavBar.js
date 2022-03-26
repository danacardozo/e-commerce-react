import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import logo from "../assets/logo.jpg";
import Badge from "@material-ui/core/Badge";
import{ Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
  },
  grow: {
      flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
   marginRight: "10px",
   height: "1rem",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <img src={logo} alt="commerce.js" height="25px" className={classes.image}/>
          </IconButton>
          </Link>
          
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
           hola invitado
          </Typography>
          <div className={classes.button}>
            <Link to="/SignIn">
              <Button variant="outlined">
                <strong>Iniciar sesion </strong>
            </Button> 
            </Link>
            

            <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary"> 
                 <ShoppingCart fontSize="large" color="primary"/>
              </Badge>      
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
