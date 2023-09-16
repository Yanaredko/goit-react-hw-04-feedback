import React, { useState } from "react";
import PropTypes from "prop-types";
import FeedbackButton from "./FeedbackButton.jsx"

function FeedbackApp() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    

    const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

    

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (total === 0) {
            return 0;
        }
        return (good / total) * 100; 
    }

    return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackButton label="Good" onClick={() => handleFeedback('good')} />
      <FeedbackButton label="Neutral" onClick={() => handleFeedback('neutral')} />
      <FeedbackButton label="Bad" onClick={() => handleFeedback('bad')} />
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positivePercentage.toFixed(0)}%</p>
      </div>
    </div>
  );
}

FeedbackApp.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackApp;