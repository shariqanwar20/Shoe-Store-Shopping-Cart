import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import shoes from "../shoes.json";
import { Button, CardActions } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct } from "./ProductReducer";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    margin: "auto",
  },
});

export function ProductItem() {
  const classes = useStyles();
  let { shoeId } = useParams();
  const dispatch = useDispatch();

  let shoe = shoes[shoeId];

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={shoeId}
          height="500"
          image={shoe.img}
          title={shoeId}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{
              lineHeight: 1.5,
              fontSize: "30px",
              fontWeight: "normal",
              fontFamily: "Roboto",
            }}
          >
            {toTitleCase(shoe.name)}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            style={{ color: "gray", fontFamily: "sans serif" }}
          >
            {shoe.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ margin: "0 auto" }}>
        <Button
          size="large"
          color="primary"
          onClick={() => {
            dispatch(addProduct({ keyName: shoeId }));
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

//used to convert JOHN SMITH into John Smith
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
