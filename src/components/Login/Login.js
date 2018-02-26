import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { uiConfig } from '../../Utilities/firebase-config';
import { logIn, logOut } from '../../actions/index';
import * as firebase from 'firebase';
import { writeUserData } from '../../Utilities/firebaseFunctions'
import { firebaseApp } from '../../Utilities/firebaseFunctions'
import HeaderImage from '../../assets/header-triangle_2.svg';
import Logo from '../../assets/logo.svg';
import './Login.css';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super()

    this.state = {
      errorState: ''
    }
  }

 componentDidMount() {
    firebase.auth().onAuthStateChanged( async user => {
      if(user) {
        const userToStore = {    userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
          userId: user.uid 
        }
        localStorage.setItem('user', JSON.stringify(userToStore))
        this.props.logIn(userToStore)
        writeUserData(userToStore)
      }
    })
  }

  signOut = (user) => {
    firebase.auth().signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('roasters');
    this.props.logOut(user);
  }

  loginDisplay = ({user}) => {
    return !user.userName ?
       <div>
          <div className='header-container'>
            <img src = {HeaderImage} className='header-triagle' alt='Roastr Logo' />
          </div>
          <h3> welcome to </h3>
          <img src= {Logo} alt='Roastr logo' className='landing-logo'/>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div> 
        :
        <div>
          <h1> WELCOME</h1> 
          <h3 className='name'>{user.userName} </h3>
          <img src={user.userPhoto} alt='user' className='profile-picture'/>
          <button onClick={this.signOut} className='logout'> LOG OUT</button>
        </div>
  }

  render() {
    const pageToDisplay = this.loginDisplay(this.props)
    return (
      <div>
        {pageToDisplay}
      </div>
    )
  }
}

export const mapStateToProps = store => ({
  user: store.user
})

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  logOut: user => dispatch(logOut(user)),
})

Login.propTypes = {
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  user: PropTypes.shape({
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhoto: PropTypes.string,
    userId: PropTypes.string
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
