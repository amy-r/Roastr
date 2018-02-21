import React from 'react';
import ReactDOM from 'react-dom';
import CoffeeForm from '../CoffeeForm/CoffeeForm';
import { Link } from 'react-router-dom';
import './Card.css'

export const Card = (props) => {
  const newProps = Object.entries(props)

  newProps.shift();
  
  const card = newProps.map ( entry => {
    if (entry[0] === 'name') {
      return <li className='roaster-name'> { entry[1] } </li>
    } else {
      return <li> { entry[0] } : { entry[1] } </li>
    }
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
