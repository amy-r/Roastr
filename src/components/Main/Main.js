import React from 'react';
import { key } from '../../utilities/api-key'
import { body, text } from '../../utilities/emailBody'
import Form from '../Form/Form';

export const Main = (props) => {
  // console.log(key)
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(key);
  // console.log(sgMail)
  // const msg = {
  //   to: 'jpquinn605@gmail.com',
  //   from: 'hello@amethystcoffee.co',
  //   subject: 'Hello, Jordan!',
  //   text: text,
  //   html: body
  // };
  // sgMail.send(msg);

  return (
    <div>
      <h1>
        Main Container
      </h1>
      <Form />
    </div>
  )
}

