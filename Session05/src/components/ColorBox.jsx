import React, { useState } from 'react'

export default function ColorBox() {
    const colors =  ['red', 'blue', 'green', 'orange', 'purple'];
    const [bgColor, setBgColor] = useState('white');

    const handleChangeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    }

  return (
    <div style={{textAlign: 'center', padding: 20}}>
        <div style={{
            width: 200,
            height: 200,
            margin: '0 auto 16px',
            background: bgColor,
            border: '1px solid black',
            borderRadius: 10,
            transition: 'background-colors, 0.3s ease-in-out'
        }}></div>
        <button onClick={handleChangeColor}>Đổi màu</button>
    </div>
  )
}
