import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
      <NavLink to ='/'>
        <h1>
          Roastr
        </h1>
      </NavLink>
      { props.user.userName && displayUserActions }
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Header)