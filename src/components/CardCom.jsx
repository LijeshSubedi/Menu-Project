import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";

const CardCom = (props) => {
  console.log(props);
  return (
    <>
      <Card  sx={{ maxWidth: 345 ,
      margin  :"10px"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={props.imgurl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.detail}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Rs. {props.price}
            </Typography>

          </CardContent>
          
        </CardActionArea>
        <Divider/>
        
        <CardActions>
          <Button size="small" color="primary">
            Order
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCom;
