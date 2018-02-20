import React, { Component }from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';


export class CardContainer extends Component {

  render() {
    const roasters = this.props.roasters.map( roaster => {
      return <Card {...roaster} />
    })
    return(
      <div>
        <h1> Roasters: </h1>
        <p> hi </p>
        <h3 className='nav'>
          <NavLink to='/form'>    
            ADD ROASTER
          </NavLink>
        </h3>
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