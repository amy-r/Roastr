import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import { withRouter } from 'react-router-dom';
import { logIn, 
  retrievedRoasters, 
  retrievedCoffees } from '../../actions/index';
import { connect } from 'react-redux';
import { pullRoasters, firebaseApp } from '../../Utilities/firebaseFunctions';
import PropTypes from 'prop-types';

export const db = firebaseApp.database();
const ref1 = db.ref('/roasters');
const ref2 = db.ref('/coffees');

export class App extends Component {
  constructor() {
    super();

    this.state = {
      errorState: ''
    };
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.props.logIn(user);
        const currentRoasters = await pullRoasters(ref1);
        const currentCoffees = await pullRoasters(ref2);
        localStorage.setItem('roasters', JSON.stringify(currentRoasters));
        localStorage.setItem('coffees', JSON.stringify(currentCoffees));
        this.props.retrievedRoasters(currentRoasters);
        this.props.retrievedCoffees(currentCoffees);
      }
    } catch (error) {
      this.setState({
        errorState: 'Error Retrieving Information'
      });
    }
  }

  render() {
    return (
      <div> 
        <Main />
        <p> {this.state.errorState} </p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  retrievedRoasters: roasters => dispatch(retrievedRoasters(roasters)),
  retrievedCoffees: coffees => dispatch(retrievedCoffees(coffees))
});


App.propTypes = {
  logIn: PropTypes.func,
  retrievedRoasters: PropTypes.func,
  retrievedCoffees: PropTypes.func,
  user: PropTypes.shape({
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhoto: PropTypes.string,
    userId: PropTypes.string
  })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
