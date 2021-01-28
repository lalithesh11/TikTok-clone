import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({channel,description,song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
           
           {/* The ticker is having a class with the name ticker, we can find out if we inspect it */}
          <Ticker mode="smooth">
              {({ index }) => (
              <>
               <p>{song}</p>
              </>
              )}
            </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="disc"/>
    </div>
  );
}

export default VideoFooter;
