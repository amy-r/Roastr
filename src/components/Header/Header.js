import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './header-logo.svg';
import './Header.css';
import PropTypes from 'prop-types';

export const Header = () => {
  return (
    <div>
      <div className='header-desktop'>
        <img src={Logo} alt='roastr logo' className='header-logo' />
        <div>
          <NavLink to='/current-roasters'> 
            <h3 className='nav'>
              ROASTERS
            </h3>
          </NavLink>
        </div>
        <NavLink to ='/'>
          <h3 className='nav'>
            HOME
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

Header.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhoto: PropTypes.string,
    userId: PropTypes.string
  })
};

export default connect(mapStateToProps, null)(Header);