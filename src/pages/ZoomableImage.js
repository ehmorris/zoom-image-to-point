import React from "react"
import Drake from "../images/Drake.jpg"

class ZoomableImage extends React.Component {
  render() {
    return (
      <img
        style={{
          width: '100%',
        }}
        src={Drake}
      />
    )
  }
}

export default ZoomableImage;
