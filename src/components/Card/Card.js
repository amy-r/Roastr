import React from 'react';
import ReactDOM from 'react-dom';

export const Card = (props) => {
  const card = Object.entries(props).map ( entry => {
    return <li> { entry[0] } : { entry[1] } </li>
  })

  return(
    <div>
      {card}
    </div>
  )
}
