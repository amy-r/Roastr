import React from 'react';
import '../Card/Card.css'

export const FormCard = (props) => {
  return(
    <div className='roaster-card'>
      <h3 className='roaster-name'> { props.name } </h3>
      <ul id='roaster-list'>
        <li> Overall Score { props.overallScore } </li>
      </ul>
    </div>
  )
}