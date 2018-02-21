import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../actions/index';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

class App extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
     this.props.logIn(user);
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
