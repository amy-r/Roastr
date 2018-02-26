import React from 'react';
import { connect } from 'react-redux';
import { FormCard } from '../FormCard/FormCard'

export const SingleRoaster = (props) => {
  const coffeeForms = props.coffees.filter( coffee => {
    console.log('props name', props.name)
    console.log('coffee name', coffee.roaster)
    return coffee.roaster.toLowerCase() === props.name.toLowerCase();
  })
  const formCards = coffeeForms.map( form => {
    return <FormCard {...form} />
  })
  return (
    <div>
      <h1> {props.name} </h1>
      {formCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  coffees: state.coffees
})

export default connect(mapStateToProps, null)(SingleRoaster)