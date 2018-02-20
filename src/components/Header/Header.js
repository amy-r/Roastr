import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './header-logo.svg';
import './Header.css'

export const Header = (props) => {
  const displayUserActions = (
    <div>
      <NavLink to='/form'>
        <h3 className='nav'> 
        ADD ROASTER
        </h3>
      </NavLink>
      <NavLink to='/current-roasters'> 
        <h3 className='nav'>
        DISPLAY ROASTERS
        </h3>
      </NavLink>
    </div>
  )

  return (
    <div>
      <div className='header-desktop'>
      <img src={Logo} className= 'header-logo' />
      {displayUserActions}
      <NavLink to ='/'>
        <h3 className='nav'>
          HOME
        </h3>
      </NavLink>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Header)