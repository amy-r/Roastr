import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { uiConfig } from '../../Utilities/firebase-config';
import { logIn, logOut, retrievedRoasters } from '../../actions/index';
import * as firebase from 'firebase';
import { writeUserData, pullRoasters } from '../../Utilities/firebaseFunctions'
import { firebaseApp } from '../../Utilities/firebaseFunctions'
import HeaderImage from '../../assets/header-triangle_2.svg';
import Logo from '../../assets/logo.svg';
import './Login.css';

const db = firebaseApp.database();
const ref = db.ref('/roasters');

export class Login extends Component {
  constructor() {
    super()

    this.state = {
      errorState: ''
    }
  }

 // Views (React) should have no logic in them (besides view logic)
 // if you're using something like Redux.
 // This logic should be moved to action creators and reducers
 componentDidMount() {
   // Why is this function wrapped in a try-catch?
   // Based on the documentation
   // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
   // It takes a onChaged and onError callback

   // If this logic were in an action creator or reducer
   // this block in Login.js would look something like:

   // firebase.auth().onAuthStateChanged(function(user) {
   //   actionCreator.userSignedIn(user);
   // },
   // function(error) {
   //   actionCreator.userSignInFailed(error);
   // });

   // In fact, now that I think about it,
   // the above code should be in an action creator
   // this view should try as hard as it can
   // to be ignorant of firebase
   // (un?)fortunately, you're able to use a StyledFirebaseAuth
   // component, so this view needs to know about it on some level

   try{
     firebase.auth().onAuthStateChanged( async user => {
      if(user) {
        const userToStore = {
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
          userId: user.uid
        }
        localStorage.setItem('user', JSON.stringify(userToStore))
        this.props.logIn(userToStore)
        writeUserData(userToStore)
        const currentRoasters = await pullRoasters(ref);
        localStorage.setItem('roasters', JSON.stringify(currentRoasters));
      }
    })
    } catch (error) {
      this.setState({
        errorState: error.message
      })
    }
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
          <img src={user.userPhoto} alt='user'/>
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
  retrievedRoasters: roasters => dispatch(retrievedRoasters(roasters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
