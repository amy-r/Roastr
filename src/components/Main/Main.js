import React, { Component } from 'react';
import { key } from '../../Utilities/api-key';
import { body, text } from '../../Utilities/emailBody';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import CoffeeForm from '../CoffeeForm/CoffeeForm';

const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(key);
  const msg = {
    to: 'jpquinn605@gmail.com',
    from: 'hello@amethystcoffee.co',
    subject: 'Hello, Jordan!',
    text: text,
    html: body
  };
  sgMail.send(msg);


export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path='/form' component={Form} />
          <Route path='/coffee-form' component={CoffeeForm} />
          <Route path='/current-roasters' component={CardContainer} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps, null)(Main))

