import "./styles.css";
import React, { useState } from "react";
import Default from "./assets/default.jpg";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  var image;
  var name;
  var song;
  const handlePlay = () => {
    console.log("Audio is playing");
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log("Audio is paused");
    setIsPlaying(false);
  };

  if (props.image === "") {
    image = Default;
  } else {
    image = props.image;
  }
  if (props.name === "") {
    name = "Nothing Yet";
  } else {
    name = props.name;
  }
  if (props.song === "") {
    song = "Nothing Yet";
  } else {
    song = props.audiofile;
  }

  return (
    <div
      className="container" key={name}
      style={{
        animation: isPlaying ? "color 8s linear infinite" : "none",
      }}
    >
      <img
        className="img1"
        src={image}
        style={{
          animation: isPlaying
            ? "animate 20s linear infinite forwards"
            : "none",
        }}
        alt="img"
      />
      <h1>{name}</h1>

      <audio controls key={name} onPlay={handlePlay}  autoPlay onPause={handlePause}>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
