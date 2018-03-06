import React from 'react';
import '../Card/Card.css';
import PropTypes from 'prop-types';

export const FormCard = (props) => {
  return (
    <div className='roaster-card'>
      <h3 className='roaster-name'> { props.name } </h3>
      <ul id='roaster-list'>
        <li> Overall Score: { props.overallScore } </li>
        <li> Region: { props.region } </li>
        <li> Acidity: { props.acidity } </li>
        <li> Body: { props.body } </li>
        <li> Sweetness: { props.sweetness } </li>
        <li> Tactile: { props.tactile } </li>
      </ul>
    </div>
  );
};

FormCard.propTypes = {
  name: PropTypes.string,
  overallScore: PropTypes.string,
  region: PropTypes.string,
  acidity: PropTypes.string,
  body: PropTypes.string,
  sweetness: PropTypes.string,
  tactile: PropTypes.string
};  