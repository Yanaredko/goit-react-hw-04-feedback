import React from 'react';
import PropTypes from 'prop-types';

function FeedbackButton({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

FeedbackButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackButton;
