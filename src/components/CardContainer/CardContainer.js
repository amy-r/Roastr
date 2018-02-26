import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';
import HoverImage from "react-hover-image";
import add from './add.svg';
import addhover from './add-hover.svg';
import { retrievedRoasters, retrievedCoffees } from '../../actions/index';
import PropTypes from 'prop-types';


export class CardContainer extends Component {
  componentDidMount() {

  }
    
  renderedCards = () => {
    return this.props.roasters.map( (roaster, index) => {
      return <Card key={index} {...roaster} />;
    });
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
    );
  }
}

export const mapStateToProps = state => ({
  roasters: state.roasters,
  coffees: state.coffees
});

export const mapDispatchToProps = dispatch => ({
  retrievedRoasters: roasters => dispatch(retrievedRoasters(roasters)),
  retrievedCoffees: coffees => dispatch(retrievedCoffees(coffees))
});

CardContainer.propTypes = {
  retrievedRoasters: PropTypes.func,
  retrievedCoffees: PropTypes.func,
  roasters: PropTypes.arrayOf(PropTypes.shape({
    altitude: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
    equipment: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    water: PropTypes.string
  })),
  coffees: PropTypes.arrayOf(PropTypes.shape({
    acidty: PropTypes.string,
    additionalComments: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
    overallImpression: PropTypes.string,
    overallScore: PropTypes.string,
    region: PropTypes.string,
    roaster: PropTypes.string,
    sweetness: PropTypes.string,
    tactile: PropTypes.string
  }))
};

export default 
withRouter(connect(mapStateToProps, mapDispatchToProps)(CardContainer));