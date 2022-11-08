import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React from "react";
function ErrorPage() {
  return (
    <div className="fourdiv">
      <Player
        autoplay
        loop
        keepLastFrame={true}
        src={require("../Assets/404.json")}
        className="fourGif"
      >
        <Controls visible={false} />
      </Player>
    </div>
  );
}

export default ErrorPage;
