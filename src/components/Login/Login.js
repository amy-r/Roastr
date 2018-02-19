import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { uiConfig } from '../../Utilities/firebase-config';
import { logIn } from '../../actions/index';
import * as firebase from 'firebase';
import { config } from '../../Utilities/firebase-config'
firebase.initializeApp(config);



export class Login extends Component {
  constructor(props) {
    super(props)
  }

 async componentDidMount() {
   firebase.auth().onAuthStateChanged( user => {
      try {
        console.log(user)
        const userToStore = {
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoUrl,
          userId: user.uid }
        this.props.logIn(userToStore)
      } catch (error) {
        console.log(error)
      }
    })
  }

  render() {
    return(
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
  }
}


export const mapStateToProps = store => ({
  user: store.user
})

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
