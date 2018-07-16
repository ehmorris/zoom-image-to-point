import React from "react"
import Image from "../images/Image.jpg"

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

    const mouseOffsetX = event.clientX
    const mouseOffsetY = event.clientY
    const mouseXPercent = event.clientX / this.state.width
    const mouseYPercent = event.clientY / imageHeight

    const oldWidth = this.state.width
    const oldHeight = this.state.width * this.state.aspectRatio

    const mouseOffsetXRelToImg = mouseOffsetX - this.state.x
    const mouseOffsetYRelToImg = mouseOffsetY - this.state.y
    const mouseXPercentRelToImg = mouseXPercent - (this.state.x / oldWidth)
    const mouseYPercentRelToImg = mouseYPercent - (this.state.y / oldHeight)

    return {
      mouseOffsetX: mouseOffsetXRelToImg,
      mouseOffsetY: mouseOffsetYRelToImg,
      mouseXPercent: mouseXPercentRelToImg,
      mouseYPercent: mouseYPercentRelToImg,
    }
  }

  zoom(event) {
    const {mouseOffsetX, mouseOffsetY, mouseXPercent, mouseYPercent} =
      this.mousePositionRelativeToImage(event)

    const newWidth = this.state.width + event.deltaY
    const newHeight = newWidth * this.state.aspectRatio

    const newXDiff = (mouseXPercent * newWidth) - mouseOffsetX
    const newYDiff = (mouseYPercent * newHeight) - mouseOffsetY

    const newX = this.state.x - newXDiff
    const newY = this.state.y - newYDiff

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
        src={Image}
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
