import React, { Component }from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';

export class CardContainer extends Component {

  render() {
    const roasters = this.props.roasters.map( roaster => {
      return <Card {...roaster} />
    })
    return(
      <div>
        <h1>Currently Reviewed Roasters: </h1>
        {roasters}
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  roasters: state.roasters,
  coffees: state.coffees
})

export default connect(mapStateToProps, null)(CardContainer)