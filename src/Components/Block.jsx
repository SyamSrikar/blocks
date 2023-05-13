import React from 'react'
import '../style.css'
import { useState,useEffect,useRef } from 'react';
import Cube from './Cube';

const Block=() =>{

      const [top, setTop] = useState(0);
      const [left, setLeft] = useState(0);

      const handleLeft=()=>{
        setLeft(left-10);
      }
      const handleRight=()=>{
        setLeft(left+10)
      }
      const handleTop=()=>{
        setTop(top-10)
      }
      const handleBottom=()=>{
        setTop(top+10);
      }
            
  return (
    <div className='main_container'>
        <button className='button left_button' onClick={()=>handleLeft()} disabled={left <= 0}><p>Left</p></button>
        <button className='button right_button' onClick={()=>handleRight()} disabled={left >= 90}><p>Right</p></button>
        <button className='button top_button' onClick={()=>handleTop()} disabled={top <= 0}><p>Top</p></button>
        <button className='button bottom_button' onClick={()=>handleBottom()} disabled={top >=90}><p>Bottom</p></button>
        <div className='container'>
          <Cube top={top} left={left}/>
        </div>
    </div>
  )
}

export default Block