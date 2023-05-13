import React, { useEffect } from 'react'

const Cube=(props) =>{

    const style = {
        position: 'absolute',
        top: `${props.top}%`,
        left: `${props.left}%`,
        width: '10%',
        height: '10%',
        backgroundColor: 'green',
      };
  return (
    
    <div style={style}></div>
  )
}

export default Cube

