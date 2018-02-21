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
      return <li> <h3 className='roaster-name'>{ entry[1] } </h3></li>
    } else {
      return <li className='roaster-data'> { entry[0] } : { entry[1] } </li>
    }
  })

  return(
    <div>
      <div className='roaster-card'>
        <ul id='roaster-list'>
          {card}
        </ul>
      <Link to='coffee-form'> <button className='new-coffee'>+ NEW COFFEE</button> </Link>
      </div>
    </div>
  )
}
