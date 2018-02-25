import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoffee } from '../../actions/index';
import { withRouter } from 'react-router';
import { createEmail } from '../../Utilities/emailBody'
import '../Form/Form.css';

export class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
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
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      email, 
      overallScore, 
      region, 
      acidity,
      body,
      sweetness,
      tactile,
      overallImpression,
      roaster, 
      additionalComments
    } = this.state;

    const newCoffee = {
      name, 
      email,
      overallScore, 
      region, 
      acidity,
      body,
      sweetness,
      tactile,
      overallImpression,
      roaster, 
      additionalComments
    }

    this.props.addCoffee(newCoffee);
    this.sendEmail(newCoffee)
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
      additionalComments: '',
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]:value})
  }

  sendEmail = async (form) => {
    const emailToSend = createEmail(form)
    console.log(emailToSend.html)
    const sentEmailResponse = await fetch('http://localhost:3001/send-form', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },  
      body: JSON.stringify(emailToSend)
    })
    const parsedResonse = await sentEmailResponse.json();
    console.log(parsedResonse)
  }

  render() {

    return (
      <form onSubmit= {this.handleSubmit} className='new-roaster'>
        <input type="text"
          className='full' 
          name="name" 
          value={this.state.name}
          placeholder='Name' 
          onChange={this.handleChange}/>
        <input type="email"
          className='full' 
          name="email" 
          value={this.state.email}
          placeholder='Email' 
          onChange={this.handleChange}/>
        <input type="text" 
          name="overallScore"
          className='full'  
          value={this.state.overallScore} 
          placeholder='Overall Score (1-6)'
          onChange={this.handleChange}/>
        <input type="text" 
          className='full'
          name="region" 
          value={this.state.region} 
          placeholder='Region'
          onChange={this.handleChange}/>
        <input type="text"
          className='full' 
          name="acidity" 
          value={this.state.acidity} 
          placeholder='Acidity (1-6)'
          onChange={this.handleChange}/>
        <input type="text"
          className='full' 
          name="body" 
          value={this.state.body} 
          placeholder='Body (1-6)'
          onChange={this.handleChange}/>
        <input type="text"
          className='full' 
          name="sweetness" 
          value={this.state.sweetness} 
          placeholder='Sweetness (1-6)'
          onChange={this.handleChange}/>
         <input type="text"
          className='full' 
          name="tactile" 
          value={this.state.tactile} 
          placeholder='Tactile (1-6)'
          onChange={this.handleChange}/>
         <input type="text"
          className='full' 
          name="overallImpression" 
          value={this.state.overallImpression} 
          placeholder='Overall Impression (Comments)'
          onChange={this.handleChange}/>
          <input type="text"
          className='full' 
          name="roaster" 
          value={this.state.roaster} 
          placeholder='Roaster Name'
          onChange={this.handleChange}/>
          <input type="text" 
          className='full'
          name="additionalComments" 
          value={this.state.additionalComments} 
          placeholder='Additional Comments (Optional)'
          onChange={this.handleChange}/>
        <input type="submit"className='submit'/>
      </form>
    )
  }
}

// export const mapStateToProps = (state) => {
//   roaster: state.roaster;
// }

export const mapDispatchToProps = (dispatch) => ({
  addCoffee: coffee => dispatch(addCoffee(coffee))
})

export default withRouter(connect(null, mapDispatchToProps)(CoffeeForm))
