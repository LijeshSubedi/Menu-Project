import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import useMenu from "../files/MenuContext";
// import ModalPage from "./ModalPage";

const CardCom = ({ name, imgurl, price, detail }) => {
  const { items, addToCart, removeFromCart } = useMenu();
  const [isInCart, setIsInCart] = useState(false);
  const [quantity,setQty]=useState(1)

  useEffect(() => {
    const itemIsInCart = items.find((item) => item.name === name);
    if (itemIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [items, name ]);
  const handleClick = () => {
    const qty=quantity
    const item = { name, imgurl, price,qty};

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
            
              <Box>
              <Button variant="outlined" sx={{color:"white"}}  onClick={()=>setQty(quantity>0 && quantity+1)}>+</Button>
              <Typography variant="h6" component="div">
              Qty: {quantity}
              </Typography>
              
              <Button variant="outlined" sx={{color:"white"}} onClick={()=>setQty(quantity>1 ? quantity-1:1)}>-</Button>
              </Box>
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
            {/* <ModalPage /> */}
           order 
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCom;
