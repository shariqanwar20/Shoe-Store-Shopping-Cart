import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import shoes from "../shoes.json";
import { ProductItem } from "./ProductItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, CardActions, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct } from "./ProductReducer";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    fontWeight: "bolder",
    color: "white",
    fontFamily: "sans Serif",
  },
  card: {
    maxWidth: 250,
    backgroundColor: "aliceblue",
    margin: "auto",
    marginBottom: "20px",
    marginTop: "20px",
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {},
});

export const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className="parentDiv">
      {Object.entries(shoes).map(([keyName, { name, img }]) => {
        return (
          <Card className={classes.card} key={keyName}>
            <Link
              to={`${keyName}`}
              element={<ProductItem />}
              style={{ textDecoration: "none" }}
            >
              <CardActionArea
                classes={{
                  root: classes.actionArea,
                  focusHighlight: classes.focusHighlight,
                }}
              >
                <CardMedia
                  component="img"
                  alt={keyName}
                  height="170"
                  image={img}
                  title={name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <Button
                style={{ margin: "0 auto" }}
                size="large"
                color="primary"
                onClick={() => {
                  dispatch(addProduct({ keyName }));
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
      <Outlet />
    </div>
  );
};
