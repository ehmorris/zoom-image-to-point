import React from "react"

const CenterContent = props => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
    }}>
      {props.children}
    </div>
  )
}

export default CenterContent;
