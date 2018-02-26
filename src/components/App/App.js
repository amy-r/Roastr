import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import { withRouter } from 'react-router-dom';
import { logIn, retrievedRoasters, retrievedCoffees } from '../../actions/index';
import { connect } from 'react-redux';
import { pullRoasters } from '../../Utilities/firebaseFunctions';
import { firebaseApp } from '../../Utilities/firebaseFunctions';

export const db = firebaseApp.database();
const ref1 = db.ref('/roasters');
const ref2 = db.ref('/coffees');

export class App extends Component {
  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
     this.props.logIn(user);
     const currentRoasters = await pullRoasters(ref1);
     const currentCoffees = await pullRoasters(ref2);
     localStorage.setItem('roasters', JSON.stringify(currentRoasters));
     localStorage.setItem('coffees', JSON.stringify(currentCoffees));
     this.props.retrievedRoasters(currentRoasters);
     this.props.retrievedCoffees(currentCoffees);
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
  logIn: user => dispatch(logIn(user)),
  retrievedRoasters: roasters => dispatch(retrievedRoasters(roasters)),
  retrievedCoffees: coffees => dispatch(retrievedCoffees(coffees))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
