import React, { Component } from "react";

class Canvas extends Component {
  context = null;

  componentDidMount() {
    this.context = this.refs.canvas.getContext("2d");
    this.context.fillStyle = "rgb(255, 255, 255)";
    if (this.props.buffer.length > 0) {
      this.drawCanvas(this.props.buffer);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.buffer !== nextProps.buffer && nextProps.buffer.length > 0) {
      this.drawCanvas(nextProps.buffer);
    }
  }

  drawCanvas(buffer) {
    this.context.beginPath();

    let widthUnit = Math.floor(this.refs.canvas.width / buffer.length);
    let height = this.refs.canvas.height;
    let halfHeight = height / 2;

    for (let i = 0; i < buffer.length; i++) {
      let barHeight = buffer[i] * height;
      this.context.fillRect(
        i * widthUnit,
        halfHeight - barHeight / 2,
        widthUnit - widthUnit / 3,
        barHeight
      );
    }
  }

  render() {
    return <canvas ref={"canvas"} width={500} height={200} />;
  }
}

export default Canvas;
