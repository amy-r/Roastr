import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoffee } from '../../actions/index';
import { withRouter } from 'react-router';
import './CoffeForm.css';

export class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
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

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, 
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
    this.setState({
      name: '',
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

  render() {

    return (
      <form onSubmit= {this.handleSubmit}>
        <input type="text" 
          name="name" 
          value={this.state.name}
          placeholder='Name' 
          onChange={this.handleChange}/>
        <input type="text" 
          name="overallScore" 
          value={this.state.overallScore} 
          placeholder='Overall Score (1-6)'
          onChange={this.handleChange}/>
        <input type="text" 
          name="region" 
          value={this.state.region} 
          placeholder='Region'
          onChange={this.handleChange}/>
        <input type="text" 
          name="acidity" 
          value={this.state.acidity} 
          placeholder='Acidity (1-6)'
          onChange={this.handleChange}/>
        <input type="text" 
          name="body" 
          value={this.state.body} 
          placeholder='Body (1-6)'
          onChange={this.handleChange}/>
        <input type="text" 
          name="sweetness" 
          value={this.state.sweetness} 
          placeholder='Sweetness (1-6)'
          onChange={this.handleChange}/>
         <input type="text" 
          name="tactile" 
          value={this.state.tactile} 
          placeholder='Tactile (1-6)'
          onChange={this.handleChange}/>
         <input type="text" 
          name="overallImpression" 
          value={this.state.overallImpression} 
          placeholder='Overall Impression (Comments)'
          onChange={this.handleChange}/>
          <input type="text" 
          name="roaster" 
          value={this.state.roaster} 
          placeholder='Roaster Name'
          onChange={this.handleChange}/>
          <input type="text" 
          name="additionalComments" 
          value={this.state.additionalComments} 
          placeholder='Additional Comments (Optional)'
          onChange={this.handleChange}/>
        <input type="submit"/>
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
