import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div>
      <NavLink to ='/'>
        <h1>
          Roastr
        </h1>
      </NavLink>
      <NavLink to='/form'> 
        Add New Roaster
      </NavLink>
      <NavLink to ='/login'>
        User Login
      </NavLink>
    </div>
  )
}