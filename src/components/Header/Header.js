import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './header-logo.svg';
import './Header.css'

export const Header = (props) => {
  const displayUserActions = (
    <div>
      <NavLink to='/form'> 
        Add New Roaster
      </NavLink>
      <NavLink to='/current-roasters'> 
        See Current Roasters
      </NavLink>
    </div>
  )

  return (
    <div>
      <div className='header-desktop'>
      <img src={Logo} className= 'header-logo' />
      <NavLink to ='/'>
        <h3 className='nav'>
          Roastr
        </h3>
      </NavLink>
      { props.user.userName && displayUserActions }
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Header)