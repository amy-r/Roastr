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

  render() {
    const { user } = this.props 
    if(!user.userName) {
      return(
        <div>
          <div className='header-container'>
            <img src = {HeaderImage} className='header-triagle' alt='Roastr Logo' />
          </div>
          <h3> welcome to </h3>
          <img src= {Logo} alt='Roastr logo' className='landing-logo'/>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      ) 
    } else {
       return (
        <div>
          <h1> WELCOME</h1> 
          <h3 className='name'>{user.userName} </h3>
          <img src={user.userPhoto} alt='user' className='profile-picture'/>
          <button onClick={this.signOut} className='logout'> LOG OUT</button>
        </div>
      )
    }
  }
}

export const mapStateToProps = store => ({
  user: store.user
})

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  logOut: user => dispatch(logOut(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
