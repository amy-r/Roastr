import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div>
      <h1>
        Roast
      </h1>
      <NavLink to='/form'> 
        Form 
      </NavLink>
    </div>
  )
}