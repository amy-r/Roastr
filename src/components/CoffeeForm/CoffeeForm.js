import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoffee } from '../../actions/index';
import { withRouter } from 'react-router';
import { addCoffeeData } from '../../Utilities/firebaseFunctions';
import { createEmail } from '../../Utilities/emailBody';
import '../Form/Form.css';
import PropTypes from 'prop-types';

export class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: this.props.email,
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: this.props.name,
      additionalComments: '',
      errorState: ''
    };
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newCoffee = {...this.state};
      addCoffeeData(newCoffee);
      this.props.addCoffee(newCoffee);
      this.sendEmail(newCoffee);
      this.setState({
        name: '',
        email: '',
        overallScore: '',
        region: '',
        acidity: '',
        body: '',
        sweetness: '',
        tactile: '',
        overallImpression: '',
        roaster: '',
        additionalComments: ''
      });
      this.props.history.push(`/single-roaster/${this.props.name}`);
    } catch (error) {
      this.setState({
        errorState: 'Your email could not be sent at this time'
      });
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  sendEmail = async (form) => {
    try {
      const emailToSend = createEmail(form);
      await fetch('http://localhost:3001/send-form', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify(emailToSend)
      });
    } catch (error) {
      this.setState({
        errorState: 'Your email could not be sent at this time'
      });
    }
  }

  render() {
    return (
      <div>
        <p> {this.state.errorState} </p>
        <form onSubmit= {this.handleSubmit} className='new-roaster'>
          <input type="text"
            className='full prefilled' 
            name="roaster" 
            value={this.props.name} 
            placeholder='Roaster Name'
            disabled
            required/>
          <input type="email"
            className='full prefilled' 
            name="email" 
            value={this.props.email}
            placeholder='Email' 
            disabled
            required/>
          <input type="text"
            className='full' 
            name="name" 
            value={this.state.name}
            placeholder='Blend/Bean Name' 
            onChange={this.handleChange}
            required/>
          <input type="text" 
            name="overallScore"
            className='full'  
            value={this.state.overallScore} 
            placeholder='Overall Score (1-6)'
            onChange={this.handleChange}
            required/>
          <input type="text" 
            className='full'
            name="region" 
            value={this.state.region} 
            placeholder='Region'
            onChange={this.handleChange}
            required/>
          <input type="text"
            className='full' 
            name="acidity" 
            value={this.state.acidity} 
            placeholder='Acidity (1-6)'
            onChange={this.handleChange}
            required/>
          <input type="text"
            className='full' 
            name="body" 
            value={this.state.body} 
            placeholder='Body (1-6)'
            onChange={this.handleChange}
            required/>
          <input type="text"
            className='full' 
            name="sweetness" 
            value={this.state.sweetness} 
            placeholder='Sweetness (1-6)'
            onChange={this.handleChange}
            required/>
          <input type="text"
            className='full' 
            name="tactile" 
            value={this.state.tactile} 
            placeholder='Tactile (1-6)'
            onChange={this.handleChange}
            required/>
          <input type="text"
            className='full' 
            name="overallImpression" 
            value={this.state.overallImpression} 
            placeholder='Overall Impression (Comments)'
            onChange={this.handleChange}
            required/>
          <input type="text" 
            className='full'
            name="additionalComments" 
            value={this.state.additionalComments} 
            placeholder='Additional Comments (Optional)'
            onChange={this.handleChange} />
          <input type="submit"className='submit'/>
        </form>
      </div>
    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addCoffee: coffee => dispatch(addCoffee(coffee))
});

CoffeeForm.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  addCoffee: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(null, mapDispatchToProps)(CoffeeForm));
