import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./proj_feature.css";


const Proj_Feature = ({ video, title, blurb, url, source, reverse}) => {

  return (
    <div className={`proj-feat-container ${reverse ? 'reverse' : ''}`}>
     <div className="proj-video">
      <ReactPlayer url={video} width="100%" controls={true} />
     </div>
     <div className="proj-text">
      <h4>{title}</h4>
      <p>{blurb} </p>
      <div className="proj-buttons">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="proj-button"
            >
              Check it out!
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="proj-button"
            >
              Source Code
            </a>
          )}
        </div>
     </div>
    </div>
  );
};

export default Proj_Feature;
