import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./proj_feature.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Proj_Feature = ({ video, title, blurb, url, source_code }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      <Card
        sx={{ maxWidth: 345 }}
        className="proj__feature-card"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="card-col">
          <ReactPlayer url={video} width="100%" controls={true} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blurb}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href={url}
              target="blank"
              rel="noreferrer"
              style={{ background: "var(--gradient-bar)" }}
            >
              Check it out!
            </Button>
            <Button
              size="small"
              href={source_code}
              target="blank"
              rel="noreferrer"
              style={{ background: "var(--gradient-bar)" }}
            >
              Source Code
            </Button>
          </CardActions>
        </div>

        <div className={`card-details ${isShown ? "shown" : ""}`}>
          <div>
            <h4>Issues</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quidem doloribus vel, saepe obcaecati dignissimos error corrupti
            harum iure, voluptates non? Fuga, voluptatibus. Ut magnam porro iure
            sit voluptatibus consequatur.
          </div>

          <div>
            <h4>Things</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id qui
            porro aliquam quo alias officia natus repudiandae dolorem. Illo
            neque voluptate velit aut eligendi ab enim adipisci fugit est
            maxime.
          </div>
        </div>
      </Card>
    </div>
    // <div className="project__feature-container">
    //   <div
    //     className="project__feature-project"
    //     onMouseEnter={() => setIsShown(true)}
    //     onMouseLeave={() => setIsShown(false)}
    //   >
    //     <div className="project__feature-vis_container">
    //       <div className="project__feature-img">
    //         <div className="img-wrapper">
    //           <ReactPlayer
    //             url={"https://youtu.be/4u89KY6lVao"}
    //             muted={true}
    //             playing={true}
    //           />
    //         </div>
    //       </div>
    //       <div className="project__feature-blurb">
    //         <div className="project__feature-title">
    //           <div>Title</div>
    //           <div>details</div>
    //         </div>
    //         <div>Tools</div>
    //         <a href="#">Check it out</a>
    //       </div>
    //     </div>
    //     {isShown && (
    //       <div className="project__feature-more slide-in-left">
    //         <div>
    //           <h4>Issues</h4>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //           quidem doloribus vel, saepe obcaecati dignissimos error corrupti
    //           harum iure, voluptates non? Fuga, voluptatibus. Ut magnam porro
    //           iure sit voluptatibus consequatur.
    //         </div>
    //         <div>
    //           <h4>Things</h4>
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id qui
    //           porro aliquam quo alias officia natus repudiandae dolorem. Illo
    //           neque voluptate velit aut eligendi ab enim adipisci fugit est
    //           maxime.
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Proj_Feature;
