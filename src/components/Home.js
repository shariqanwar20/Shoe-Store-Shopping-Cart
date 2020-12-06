import { Typography } from '@material-ui/core';
import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import mensShoes from '../images/Lunar2.png'
import { Link } from 'react-router-dom';
import { Products } from './Products';

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    fontWeight: 'bolder',
    color: 'white',
    fontFamily: 'sans Serif',
  },
  root: {
    maxWidth: 250,
    backgroundColor: 'aliceblue',
    margin: 'auto',
  },
});

export const Home = () => {
    const classes = useStyles();
    return (
        <div className="home-div">
            <br />
            <Typography variant="h3" gutterBottom className={classes.heading}>
                Shoe Store
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.heading} style={{fontWeight: 'light',}}>
                streetwear/lifestyle/sports
            </Typography>
            <Link to="products" element={<Products />} style={{textDecoration: 'none',}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Men's Shoes"
                            height="140"
                            image={mensShoes}
                            title="Men's Shoes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Men
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}
