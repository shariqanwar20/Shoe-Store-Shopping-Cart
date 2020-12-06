import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Home } from './Home';
import { Products } from './Products';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'primary',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexWrap: 'wrap', 
  },
  drawerTypo: {
    fontSize: "1rem", 
    fontFamily: "Roboto", 
    lineHeight: "1.5", 
    fontWeight: "400", 
    letterSpacing: "0.00938em",
    color: "rgba(0, 0, 0, 0.87)",
  },

  drawerList: {
    marginLeft: '20px',
  }
}));

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.drawerList}>
        <Link to="/" element={<Home />} className={classes.link} >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Typography variant="subtitle2" className={classes.drawerTypo}>Home</Typography>
        </Link>
      </List>
      <Divider />
      <List className={classes.drawerList}>
        <Link to="products" element={<Products />} className={classes.link}>
        <ListItemIcon><AccessibilityIcon /></ListItemIcon>
        <Typography variant="subtitle2" className={classes.drawerTypo}>Men's Shoes</Typography>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
