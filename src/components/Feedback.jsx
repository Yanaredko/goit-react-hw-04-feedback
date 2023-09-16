import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackButton from "./FeedbackButton.jsx"

class FeedbackApp extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
    }

    handleFeedback = (type) => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1
        }));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (total === 0) {
            return 0;
        }
        return (good / total) * 100; 
    }

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        
        return (
            <div>
                <h1>Please leave feedback</h1>
                <FeedbackButton label="Good" onClick={() => this.handleFeedback('good')} />
                <FeedbackButton label="Neutral" onClick={() => this.handleFeedback('neutral')} />
                <FeedbackButton label="Bad" onClick={() => this.handleFeedback('bad')} />
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
}

FeedbackApp.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default FeedbackApp;