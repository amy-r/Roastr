import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRoaster } from '../../actions/addRoaster';

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
     // console.log(this.props)
    this.props.addRoaster(newRoaster);
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    this.setState({[name]:value})
  }

  render() {

    return (
      <form onSubmit= {this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
        <input type="text" name="equipment" value={this.state.equipment} onChange={this.handleChange}/>
        <input type="text" name="water" value={this.state.water} onChange={this.handleChange}/>
        <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange}/>
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

export default connect(null, mapDispatchToProps)(Form);
