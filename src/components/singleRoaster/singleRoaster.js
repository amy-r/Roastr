import React from 'react';
import { connect } from 'react-redux';
import { FormCard } from '../FormCard/FormCard';
import PropTypes from 'prop-types';

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

SingleRoaster.propTypes = {
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

export default connect(mapStateToProps, null)(SingleRoaster)