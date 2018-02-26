import React from 'react';
import { connect } from 'react-redux';
import { FormCard } from '../FormCard/FormCard'

export const SingleRoaster = (props) => {
  const coffeeForms = props.coffees.filter( coffee => {
    return coffee.roaster.toLowerCase() === props.name.toLowerCase();
  })

  const formCards = coffeeForms.map( (form, i) => {
    return <FormCard key={form.name + i} {...form} />
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