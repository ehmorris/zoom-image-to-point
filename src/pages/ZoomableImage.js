import React from "react"
import Drake from "../images/Drake.jpg"

class ZoomableImage extends React.Component {
  constructor(props) {
    super(props);

    this.zoom = this.zoom.bind(this);

    this.state = {
      x: 0,
      y: 0,
      width: null,
    }
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
    });
  }

  zoom(event) {
    const newWidth = this.state.width + event.deltaY;

    this.setState({
      width: newWidth,
    });

    event.preventDefault();
  }

  render() {
    return (
      <img
        onWheel={this.zoom}
        src={Drake}
        style={{
          position: 'absolute',
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
          width: `${this.state.width}px`,
        }}
      />
    )
  }
}

export default ZoomableImage;
