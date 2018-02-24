import React, { Component }from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';
import HoverImage from "react-hover-image";
import add from './add.svg';
import addhover from './add-hover.svg';


export class CardContainer extends Component {

  renderedCards = () => {
    const cards = this.props.roasters.map( (roaster, i) => {
      console.log(i)
      return <Card key={i} {...roaster} />
      }
    )

    return cards
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

export default withRouter(connect(mapStateToProps, null)(CardContainer))