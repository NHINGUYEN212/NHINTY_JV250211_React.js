import React from 'react'

export default function CardUser({ name, age, avatar}) {
  return (
    <div className='card'>
        <img className='user-avatar' src={avatar} alt="{name}" />
        <h3>{name}</h3>
        <p>Tuổi: {age}</p>
    </div>
  )
}
