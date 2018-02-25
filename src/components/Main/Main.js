import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SingleRoaster from '../singleRoaster/singleRoaster';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CoffeeForm from '../CoffeeForm/CoffeeForm';

export class Main extends Component {
  displayHeader = () => {
    if(this.props.user.userName) {
      return <Header />
    }
  }

  findRoute = (match, data) => {
    const found = data.find( item => {
      return item.name === match.params.name
    })
    
    return <SingleRoaster {...found} />
  }

  render() {
    return (
      <div>
        { this.displayHeader() }
        <Switch>
          <Route path='/form' component={Form} />
          <Route path='/coffee-form' component={CoffeeForm} />
          <Route path='/current-roasters' component={CardContainer} />
          <Route path='/single-roaster/:name' render={({ match }) => {
           return this.findRoute(match, this.props.roasters)
          }} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  roasters: state.roasters
})

export default withRouter(connect(mapStateToProps, null)(Main))

