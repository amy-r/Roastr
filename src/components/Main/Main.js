import React from 'react';
import { key } from '../../Utilities/api-key';
import { body, text } from '../../Utilities/emailBody';
import { Route, Switch } from 'react-router-dom';
import { CardContainer } from '../CardContainer/CardContainer';
import { Form } from '../Form/Form';
import { Login } from '../Login/Login';

export const Main = (props) => {
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

  return (
    <div>
      <Switch>
        <Route exact path = '/' component={CardContainer} />
        <Route path='/form' component={Form} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

