import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from "./Home";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Products } from './Products';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.05,
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" element={<Home />} className={classes.title}>
            <Typography variant="h6" >
              Home
            </Typography>
          </Link>
          <Link to="products" element={<Products />} className={classes.title}>
            <Typography variant="h6" >
              Products
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

