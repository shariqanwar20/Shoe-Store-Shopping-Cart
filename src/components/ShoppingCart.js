import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, shoppingCartArray } from "./ProductReducer";
import {
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  makeStyles,
  Avatar,
  ListItemText,
  Divider,
  createStyles,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      color: "white",
      margin: "0 auto",
      borderRadius: "5px",
    },
    inline: {
      display: "inline",
      color: "white",
    },
  })
);
export const ShoppingCart = () => {
  const state = useSelector(shoppingCartArray);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ color: "rgb(168, 161, 161)", textAlign: "center" }}>
        Shopping Basket
      </h2>
      {console.log(state.shoeArray)}
      <h5 style={{ textAlign: "center", color: "white" }}>
        You have {state.itemsLength} items in your basket
      </h5>
      <List
        className={classes.root}
        style={{
          background: "linear-gradient(to right, #7F8C8D, rgb(168, 161, 161))",
        }}
      >
        {state.shoeArray.map((shoe, ind) => {
          return (
            <div key={ind}>
              <ListItem key={ind} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={shoe.name} src={shoe.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={shoe.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {shoe.price}
                      </Typography>{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {` Quantity: ${shoe.quantity}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() =>
                      dispatch(removeProduct({ keyName: shoe.id }))
                    }
                  >
                    <DeleteIcon htmlColor="white" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
        <ListItem>
          <ListItemText style={{ textAlign: "end" }}>
            <Typography style={{ fontSize: "30px", fontWeight: "bolder" }}>
              {`$${state.totalPrice}`}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
