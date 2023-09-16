import React, { useState } from 'react';
import '../index.css';
import Statistics from './Statistics.jsx';
import FeedbackOptions from './FeedbackOptions.jsx';
import Section from './Section.jsx';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const handleFeedback = (type) => {
    setFeedback ((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;
    const hasFeedback = totalFeedback > 0;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
         {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage.toFixed(0)}
            />
          ) : (
            <div>
              <p>No feedback given</p>
            </div>
          )}
        </Section>
      </div>
    );
  }

export default App;

