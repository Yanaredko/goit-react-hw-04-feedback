import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton.jsx';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(option => (
        <FeedbackButton
          key={option}
          label={option}
          onClick={() => onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;