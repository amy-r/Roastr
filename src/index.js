import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './reducers/index';
import * as firebase from "firebase";
import { config } from './Utilities/firebase-config'

firebase.initializeApp(config);

// const provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().signInWithPopup(provider)

// function writeUserData(userId, name, email) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//   });
// }

// writeUserData(0, 'Jordan Quinn', 'jpquinn605@gmail.com')

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
  );
registerServiceWorker();
