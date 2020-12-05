import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Home } from './Home';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white'}}>
        <Toolbar>
          <Link to="/" element={<Home />} className={classes.title}>
            <img src={logo} alt="logo" width="128px" />
          </Link>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

