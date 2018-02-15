import React from 'react';
import ReactDOM from 'react-dom';
import CoffeeForm from '../CoffeeForm/CoffeeForm';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  const card = Object.entries(props).map ( entry => {
    return <li> { entry[0] } : { entry[1] } </li>
  })

  return(
    <div>
      {card}
      <Link to='coffee-form'> Add New Coffee </Link>
    </div>
  )
}
