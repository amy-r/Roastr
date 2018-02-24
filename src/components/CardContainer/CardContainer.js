import React, { Component }from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';
import HoverImage from "react-hover-image";
import add from './add.svg';
import addhover from './add-hover.svg';
import { retrievedRoasters } from '../../actions/index'


export class CardContainer extends Component {
  componentDidMount() {
    const currentRoasters = 
      JSON.parse(localStorage.getItem('roasters'));
    this.props.retrievedRoasters(currentRoasters);
  }

  renderedCards = () => {
    return this.props.roasters.map( (roaster, i) => {
      return <Card key={i} {...roaster} />
      }
    )
  }

  render() {     
    return (
      <div>
        <h1> ROASTERS </h1>
          <input type="text" className ='search' placeholder="SEARCH" /> 
          <NavLink to='/form' className='addButton'>
            <HoverImage
              src={add}
              hoverSrc={addhover}
              className='addButton'
            />
          </NavLink>
        <h3 className='add'>
            ADD NEW
        </h3>
        <div className='card-section'>
          {this.renderedCards()}
        </div>
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  roasters: state.roasters,
  coffees: state.coffees
})

export const mapDispatchToProps = dispatch => ({
  retrievedRoasters: roasters => dispatch(retrievedRoasters(roasters))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardContainer))