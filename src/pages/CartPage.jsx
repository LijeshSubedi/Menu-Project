import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";

function CartPage() {
  return (
    <>
      <Card
        sx={{ maxWidth: 345 , display:"flex" , justifyContent:"center"}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MoMo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Momo is a type of steamed dumpling with some form of filling, most
              commonly chicken (traditionally yak, but often chicken and goat)
              and it is originally from Tibet.
              <br />
            </Typography>
            <Divider/>
            <Typography gutterBottom variant="h5" component="div">
              Rs.130
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order Now</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CartPage;
