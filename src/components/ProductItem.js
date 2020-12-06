import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import shoes from '../shoes.json'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const ProductItem = () => {
    const classes = useStyles();
    let { shoeId } = useParams();

    let shoe = shoes[shoeId];
    return (
        <div className={classes.root}>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <img src={shoe.img} alt={shoeId} width="600px" style={{marginLeft: "40px"}}/>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={3} style={{marginLeft: "20px",}}>
                        <Grid item xs={12}>
                            <Typography variant="h6" style={{marginLeft: "20px", lineHeight: 1.5, fontSize: "30px", fontWeight: 'normal', fontFamily: "sans serif"}}>
                                {toTitleCase(shoe.name)}
                            </Typography>   
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" style={{marginLeft: "20px", marginRight: "325px", lineHeight: 1.5, fontSize: "25px", fontWeight: 'normal', color: 'gray'}}>
                                {toTitleCase(shoe.name.substr(0, shoe.name.indexOf(' ')))}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="price-div">
                                <Typography variant='subtitle1' style={{color: 'gray', fontFamily: 'sans serif', marginLeft: '20px'}}>
                                    PRICE
                                </Typography>
                                <Typography variant='subtitle1' style={{color: 'gray', fontFamily: 'sans serif', marginLeft: '150px'}}>
                                    {shoe.price}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}




//used to convert JOHN SMITH into John Smith
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }