import React from 'react';
import '../Card/Card.css';
import PropTypes from 'prop-types';

export const FormCard = (props) => {
  return (
    <div className='roaster-card'>
      <h3 className='roaster-name'> { props.name } </h3>
      <ul id='roaster-list'>
        <li> Overall Score { props.overallScore } </li>
      </ul>
    </div>
  );
};

FormCard.propTypes = {
  name: PropTypes.string,
  overallScore: PropTypes.string
};  