import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  const card = Object.entries(props).map ( entry => {
    return <li> { entry[0] } : { entry[1] } </li>
  })

  return(
    <div>
      <ul>
      {card}
      </ul>
      <Link to='coffee-form'> Add New Coffee </Link>
    </div>
  )
}
