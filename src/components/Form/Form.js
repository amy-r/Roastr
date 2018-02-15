import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRoaster } from '../../actions/addRoaster';
import { withRouter } from 'react-router';
import './Form.css';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      location: '',
      equipment: '',
      water: '',
      contact: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, location, equipment, water, contact} = this.state;
    const newRoaster = {
      name,
      location,
      equipment,
      water,
      contact
     } 
    this.props.addRoaster(newRoaster);
    this.setState({
      name: '',
      location: '',
      equipment: '',
      water: '',
      contact: '',
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
          name="location" 
          value={this.state.location} 
          placeholder='Location'
          onChange={this.handleChange}/>
        <input type="text" 
          name="equipment" 
          value={this.state.equipment} 
          placeholder='Equipment'
          onChange={this.handleChange}/>
        <input type="text" 
          name="water" 
          value={this.state.water} 
          placeholder='Water'
          onChange={this.handleChange}/>
        <input type="text" 
          name="contact" 
          value={this.state.contact} 
          placeholder='Contact'
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
  addRoaster: roaster => dispatch(addRoaster(roaster))
})

export default withRouter(connect(null, mapDispatchToProps)(Form))
