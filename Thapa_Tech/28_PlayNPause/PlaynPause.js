import React, { useRef } from "react";
import "./PlaynPause.css";

export const PlaynPause = () => {
  const videoRef = useRef();
  const Play = () => {
    videoRef.current.play();
  };
  const Pause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <div className="Main">
        <button className="btn-play" onClick={Play}>
          Play
        </button>
        <button className="btn-pause" onClick={Pause}>
          Pause
        </button>
      </div>
      <div className="Vdo">
        <video ref={videoRef} muted>
          <source src="/Video/1.mkv" />
        </video>
      </div>
    </>
  );
};
