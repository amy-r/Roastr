import React, { Component } from 'react';
import { key } from '../../Utilities/api-key';
import { body, text } from '../../Utilities/emailBody';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CoffeeForm from '../CoffeeForm/CoffeeForm';

const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(key);
  const msg = {
    to: 'jpquinn605@gmail.com',
    from: 'elle@amethystcoffee.co',
    subject: 'Hello, Will!',
    text: text,
    html: body,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    mode: 'no-cors'
  };
  sgMail.send(msg)

export class Main extends Component {
  displayHeader = () => {
    if(this.props.user.userName) {
      return <Header />
    }
  }

  render() {
    return (
      <div>
        { this.displayHeader() }
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

