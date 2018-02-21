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

export const addRoasterData = ({userId, name, location, altitude, equipment, water, contact, email}) => {
  firebaseApp.database().ref('roasters/' + name).set({
    userId,
    name,
    altitude,
    location,
    equipment,
    water,
    contact,
    email,
  })
}

export const pullRoasters = async (ref) => {
  const currentValue = await ref.once("value")
  const snapshotValue = await currentValue.val()
  return snapshotValue
}
