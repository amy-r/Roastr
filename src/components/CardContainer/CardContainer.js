import React, { Component }from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';
import HoverImage from "react-hover-image";
import add from './add.svg';
import addhover from '../../assets/add-hover.svg';


export class CardContainer extends Component {
 
  render() {
    const roasters = this.props.roasters.map( roaster => {
      return <Card {...roaster} />
    })

    return(
      <div>
        <h1> ROASTERS </h1>
        <h3 className='add'>
            ADD NEW ROASTER
        </h3>
          <NavLink to='/form'>
            <HoverImage
              src={add}
              hoverSrc={addhover}
            />
          </NavLink>
        {roasters}
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  roasters: state.roasters,
  coffees: state.coffees
})

export default withRouter(connect(mapStateToProps, null)(CardContainer))