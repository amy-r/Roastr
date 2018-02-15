import * as firebase from "firebase";

export const config = {
    apiKey: "AIzaSyBYOjbvNWIvFDu-9R6gR4PcBqkYt5H98g4",
    authDomain: "roastr-e35c3.firebaseapp.com",
    databaseURL: "https://roastr-e35c3.firebaseio.com",
    projectId: "roastr-e35c3",
    storageBucket: "roastr-e35c3.appspot.com",
    messagingSenderId: "112340188249"
};

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};
