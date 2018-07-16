import React from "react"
import Drake from "../images/Drake.jpg"

class ZoomableImage extends React.Component {
  constructor(props) {
    super(props)

    this.zoom = this.zoom.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.image = React.createRef()

    this.state = {
      x: 0,
      y: 0,
      width: null,
      aspectRatio: null,
    }
  }

  imageLoaded() {
    const {width, height} = this.image.current.getBoundingClientRect()

    this.setState({
      width: window.innerWidth,
      aspectRatio: height/width,
    })
  }

  mousePositionRelativeToImage(event) {
    const imageHeight = this.state.width * this.state.aspectRatio

    return {
      mouseOffsetX: event.clientX,
      mouseOffsetY: event.clientY,
      mouseXPercent: event.clientX / this.state.width,
      mouseYPercent: event.clientY / imageHeight,
    }
  }

  zoom(event) {
    const {mouseOffsetX, mouseOffsetY, mouseXPercent, mouseYPercent} =
      this.mousePositionRelativeToImage(event)

    const oldWidth = this.state.width
    const oldHeight = this.state.width * this.state.aspectRatio

    const newWidth = oldWidth + event.deltaY
    const newHeight = newWidth * this.state.aspectRatio

    const newXDiff = (mouseXPercent * newWidth) - mouseOffsetX
    const newYDiff = (mouseYPercent * newHeight) - mouseOffsetY

    const newX = this.state.x - newXDiff
    const newY = this.state.y - newYDiff

    console.group()
    console.log(`oldWidth: ${oldWidth}`)
    console.log(`oldHeight: ${oldHeight}`)
    console.log(`mouseOffsetX: ${mouseOffsetX}`)
    console.log(`mouseOffsetY: ${mouseOffsetY}`)
    console.log(`newWidth: ${newWidth}`)
    console.log(`newHeight: ${newHeight}`)
    console.log(`newXDiff: ${newXDiff}`)
    console.log(`newYDiff: ${newYDiff}`)
    console.log(`newX: ${newX}`)
    console.log(`newY: ${newY}`)
    console.groupEnd()

    this.setState({
      width: newWidth,
      x: newX,
      y: newY,
    })

    event.preventDefault()
  }

  render() {
    return (
      <img
        onWheel={this.zoom}
        onLoad={this.imageLoaded}
        ref={this.image}
        src={Drake}
        alt=""
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

export default ZoomableImage
