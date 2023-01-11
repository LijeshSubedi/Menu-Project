import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import useMenu from "../files/MenuContext";

const CardCom = ({ name, imgurl, price, detail }) => {
  const { items, addToCart, removeFromCart } = useMenu();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const itemIsInCart = items.find((item) => item.name === name);
    if (itemIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [items, name]);
  const handleClick = () => {
    const item = { name, imgurl, price };

    if (isInCart) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={imgurl}
            alt="green iguana"
          />

          <CardContent style={{ backgroundColor: "#334", color: "#eee" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{detail}</Typography>
            <Typography gutterBottom variant="h5" component="div">
              Rs. {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />

        <CardActions
          style={
            isInCart
              ? { backgroundColor: "red", color: "#eee" }
              : { backgroundColor: "#334", color: "#eee" }
          }
        >
          <Button
            onClick={handleClick}
            size="small"
            color="primary"
            style={{ backgroundColor: "rgba(#446,0.7)", color: "#eee" }}
          >
            order
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCom;
