import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../actions/index';
import { connect } from 'react-redux';
import { pullRoasters } from '../../Utilities/firebaseFunctions';
import { firebaseApp } from '../../Utilities/firebaseFunctions';

export const db = firebaseApp.database();
const ref = db.ref('/roasters');

export class App extends Component {
  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
     this.props.logIn(user);
     pullRoasters(ref)
     const currentRoasters = await pullRoasters(ref);
     localStorage.setItem('roasters', JSON.stringify(currentRoasters));
    }
  }

  render() {
    return(
      <div> 
        <Main />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
