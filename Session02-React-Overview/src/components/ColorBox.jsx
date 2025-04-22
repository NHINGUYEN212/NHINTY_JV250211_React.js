import React from 'react';
import "./ColorBox.css";

export default function ColorBox({ color, colorName }) {
  return (
    <div className='box-container'>
      <div className={`box ${color}`}>Box</div>
      {colorName && <div className='colorName'>{colorName}</div>}
    </div>
  );
}
