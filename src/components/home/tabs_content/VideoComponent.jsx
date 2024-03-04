import React from "react";
import ReactPlayer from "react-player/vimeo";
import Vimeo from "@u-wave/react-vimeo";

export default function VideoComponent() {
  return (
    <Vimeo
      video="917278056"
      autoplay
      muted
      loop
      quality="1080p"
      responsive
      transparent={false}
      showByline={false}
      showPortrait={false}
      showTitle={false}
      pip
      // controls
    />
  );
}
