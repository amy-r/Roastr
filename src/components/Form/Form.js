import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRoaster } from '../../actions/index';
import './Form.css';
import { addRoasterData } from '../../Utilities/firebaseFunctions';

export class Form extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      name:'',
      location: '',
      altitude: '',
      equipment: '',
      water: '',
      contact: '',
      email: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, user, addRoaster } = this.props
    const {name, location, altitude, equipment, water, contact, email} = this.state;
    const newRoaster = {
      userId: user.userId,
      name,
      location,
      altitude,
      equipment,
      water,
      contact,
      email
    } 
    addRoaster(newRoaster);
    addRoasterData(newRoaster);
    this.setState({
      name: '',
      location: '',
      altitude: '',
      equipment: '',
      water: '',
      contact: '',
      email: ''
    });
    history.push('/current-roasters');
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]:value})
  }

  render() {

    return (
    <div>
      <h1> ADD A NEW ROASTER </h1>
      <form onSubmit= {this.handleSubmit} className = 'new-roaster'>
        <input type="text" 
          className="full"
          name="name" 
          value={this.state.name}
          placeholder='NAME' 
          onChange={this.handleChange}/>
        <input type="text" 
          className="half"
          name="location" 
          value={this.state.location} 
          placeholder='LOCATION'
          onChange={this.handleChange}/>
          <input type="text" 
          className="half right"
          name="altitude" 
          value={this.state.altitude} 
          placeholder='ALTITUDE'
          onChange={this.handleChange}/>
        <input type="text" 
          className="full"
          name="equipment" 
          value={this.state.equipment} 
          placeholder='EQUIPMENT'
          onChange={this.handleChange}/>
        <input type="text" 
          className="full"
          name="water" 
          value={this.state.water} 
          placeholder='WATER TDS'
          onChange={this.handleChange}/>
        <input type="text" 
          name="contact" 
          className="half"
          value={this.state.contact} 
          placeholder='CONTACT'
          onChange={this.handleChange}/>
        <input type="text" 
          name="email" 
          className="half right"
          value={this.state.email} 
          placeholder='EMAIL'
          onChange={this.handleChange}/>
        <input type="submit" className="submit" value='SUBMIT'/>
      </form>
    </div>  
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  addRoaster: roaster => dispatch(addRoaster(roaster))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
