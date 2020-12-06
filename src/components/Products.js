import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import shoes from '../shoes.json';
import { ProductItem } from './ProductItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    heading: {
      textAlign: 'center',
      fontWeight: 'bolder',
      color: 'white',
      fontFamily: 'sans Serif',
    },
    card: {
      maxWidth: 250,
      backgroundColor: 'aliceblue',
      margin: 'auto',
      marginBottom: '20px',
      marginTop: '20px',
    },
  });

export const Products = () => {
    const classes = useStyles();
    return (
        <div className="parentDiv">
            {Object.entries(shoes).map(([keyName, {name, img}]) => {
                return(
                    <Link to={`${keyName}`} element={<ProductItem />} key={keyName} style={{textDecoration: 'none',}}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={keyName}
                                    height="170"
                                    image={img}
                                    title={keyName}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle2" style={{textAlign: 'center', fontWeight: 'bold'}}>
                                        {name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                )
            })}
            <Outlet />
        </div>
    )
}
