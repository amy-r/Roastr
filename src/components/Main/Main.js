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
import PropTypes from 'prop-types';

export class Main extends Component {
  displayHeader = () => {
    if (this.props.user.userName) {
      return <Header />;
    }
  }

  findRoute = (match, roasters) => {
    const found = roasters.find( item => {
      return item.name === match.params.name;
    });
    
    return <SingleRoaster {...found} />;
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
            return this.findRoute(match, this.props.roasters);
          }} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  roasters: state.roasters
});

Main.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhoto: PropTypes.string,
    userId: PropTypes.string
  }),
  roasters: PropTypes.arrayOf(PropTypes.shape({
    altitude: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
    equipment: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    water: PropTypes.string
  }))
};

export default withRouter(connect(mapStateToProps, null)(Main));

