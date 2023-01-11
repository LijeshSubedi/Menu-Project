import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  Button, CardActionArea, CardActions } from "@mui/material";

const AboutDevelopersPage = () => {
  return (
    <>
    <div className="row_about">
        <div className="col">
          <Card sx={{ maxWidth: 400, margin  :"10px"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg"
                alt="Danger"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lijesh Subedi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                SoftWare Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View detail
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="col">
        <Card sx={{ maxWidth: 400 , margin  :"10px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fzSnClvueUiDCZNJINMWywHaEK%26pid%3DApi&f=1&ipt=34a86ce46136e9c1629185dd174517c9357c2ae92644a286b3fc75d9eec1b60d&ipo=images"
              alt="khatra"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Deepak Sharma
              </Typography>
              <Typography variant="body2" color="text.secondary">
              SoftWare Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View Detail
            </Button>
          </CardActions>
        </Card>
        </div>

        <div className="card__1"></div>
      
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

    </>
  );
};

export default AboutDevelopersPage;
