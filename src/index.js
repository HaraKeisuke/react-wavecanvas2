import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WaveCanvas from "./wavecanvas";

ReactDOM.render(
  <WaveCanvas url="http://localhost:3000/sample.mp3" />,
  document.getElementById("root")
);
