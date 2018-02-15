import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return(
      <div> 
        <Header />
        <Main />
      </div>
    )
  }
}

export default withRouter(connect(null, null)(App));
