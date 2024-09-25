import React from 'react'

const Card = (props) => {
  return (
    <div className='myCard'>
        <img className='cardImage' src={props.source} alt="" />
        <h2>{props.Name}</h2>
        <h3>{props.Manager}</h3>
        <button onClick={()=>window.location.href=`${props.Page}`}>View Team</button>
    </div>
  )
}

export default Card