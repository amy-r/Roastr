import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { uiConfig } from '../../Utilities/firebase-config';
import { logIn, logOut } from '../../actions/index';
import * as firebase from 'firebase';
import { writeUserData, pullRoasters } from '../../Utilities/firebaseFunctions'
import { firebaseApp } from '../../Utilities/firebaseFunctions'

var db = firebaseApp.database();
var ref = db.ref('/roasters');

export class Login extends Component {
  constructor(props) {
    super(props)
  }

 async componentDidMount() {
   firebase.auth().onAuthStateChanged( user => {
      try {
        const userToStore = {
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoUrl,
          userId: user.uid 
        }
        this.props.logIn(userToStore)
        writeUserData(userToStore)
        pullRoasters(ref)
      } catch (error) {
        console.log(error)
      }
    })
  }

  signOut = (user) => {
    firebase.auth().signOut()
    this.props.logOut(user)
  }

  render() {
    const { user, signOut } = this.props 
    if(!user.userName) {
      return(
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      ) 
    } else {
       return (
        <div>
          <h1> Welcome, {user.userName} </h1>
          <img src={user.userPhoto} />
          <button onClick={this.signOut} > Sign Out</button>
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
  logOut: user => dispatch(logOut(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
