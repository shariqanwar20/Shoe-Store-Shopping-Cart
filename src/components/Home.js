import { Typography } from '@material-ui/core';
import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom';
import { Products } from './Products';

const menShoe = "https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg"
const womenShoe = "https://girottishoes.com/media/wysiwyg/750x427-category-top-banner-women-shoes-2020-m.jpg";
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
                            image={menShoe}
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
            <br/>
            <Link to="products" element={<Products />} style={{textDecoration: 'none',}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Women's Shoes"
                            height="140px"
                            image={womenShoe}
                            title="Women's Shoes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Women
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}
