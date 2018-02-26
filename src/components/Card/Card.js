import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = (props) => {
  const { name, location, altitude, equipment, water, contact, email } = props;
  return (
    <div>
      <div className='roaster-card'>
        <h3 className='roaster-name'> {name} </h3>
        <ul id='roaster-list'>
          <li className='roaster-data'> location: {location} </li>
          <li className='roaster-data'> altitude: {altitude} </li>
          <li className='roaster-data'> equipment: {equipment} </li>
          <li className='roaster-data'> water: {water} </li>
          <li className='roaster-data'> contact: {contact} </li>
          <li className='roaster-data'> email: {email} </li>
        </ul>
        <Link to='coffee-form'> 
          <button className='new-coffee'>+ NEW COFFEE</button> 
        </Link>
        <Link to={`single-roaster/${name}`}>
          <button className='form-button'>SEE ALL SENT FORMS</button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  altitude: PropTypes.string,
  equipment: PropTypes.string,
  water: PropTypes.string,
  contact: PropTypes.string,
  email: PropTypes.string
};
