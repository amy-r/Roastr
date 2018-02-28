import React from 'react';
import { connect } from 'react-redux';
import { FormCard } from '../FormCard/FormCard';
import PropTypes from 'prop-types';
import './singleRoaster.css';

export const SingleRoaster = (props) => {
  const coffeeForms = props.coffees.filter( coffee => {
    return coffee.roaster.toLowerCase() === props.name.toLowerCase();
  });

  const formCards = coffeeForms.map( (form, index) => {
    return <FormCard key={form.name + index} {...form} />;
  });

  return (
    <div>
      <h1> {props.name} </h1>
      <div className='form-container'>
        {formCards}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  coffees: state.coffees
});

SingleRoaster.propTypes = {
  name: PropTypes.string,
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

export default connect(mapStateToProps, null)(SingleRoaster);