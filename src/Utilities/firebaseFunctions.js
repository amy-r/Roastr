import * as firebase from 'firebase';
import * as admin from 'firebase-admin'
import { config } from './firebase-config';
export const firebaseApp = firebase.initializeApp(config);



export const writeUserData = ({userId, userName, userEmail}) => {
  firebase.database().ref('users/' + userId).set({
    username: userName,
    email: userEmail,
  });
}

export const addRoasterData = ({userId, name, location, equipment, water, contact}) => {
  firebase.database().ref('roasters/' + name).set({
    userId,
    name,
    location,
    equipment,
    water,
    contact,
  })
}

export const pullRoasters = (ref) => {
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
