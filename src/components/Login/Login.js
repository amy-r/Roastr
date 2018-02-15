import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from '../../Utilities/firebase-config';
import * as firebase from "firebase";


export const Login = (props) => {
  return(
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}


