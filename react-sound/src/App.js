import React, { useState } from "react";
import song from "./static/bbell.wav";

export default function App() {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);

  function playPause() {
    if (isPlaying === false) {
      setIsPlaying(true);
      audio.play();
    } else {
      setIsPlaying(false);
      audio.pause();
    }
  }

  return (
    <div>
      <p>{isPlaying ? "Song is Playing" : "Song is Paused"}</p>
      <button onClick={playPause}>Play | Pause</button>
    </div>
  );
}
