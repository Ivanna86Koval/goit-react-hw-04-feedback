import { useState } from 'react';
import {Container} from '../GlobalStyle'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { RootStyle } from './RootStyle/RootStyle.styled';

export const App = () => {
    const [good, setGood] = useState (0);
    const [neutral, setNeutral] = useState (0);
    const [bad, setBad] = useState (0);

    const onLeaveFeedback = state => {
        switch (state) {
          case 'good':
            setGood(prevGood => prevGood + 1);
            break;

            case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
        
       case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

        default:
            return;
        }
    };

   const countTotalFeedback = () => {
        return good + neutral + bad;
   };
   const total = countTotalFeedback();

   const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
}

const stateNames = Object.keys({ good, neutral, bad });
const totalFeedback = countTotalFeedback();
const totalPercentage = countPositiveFeedbackPercentage();

     return ( 
        <Container>
      <Section  title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback}
          options={stateNames} />
      </Section>
       
        <Section title="Statistics">
          {totalFeedBack !== 0 ? (
            <Statistics good={good} 
            neutral={neutral} 
            bad={bad} 
            total={getTotalFeedBack} 
            positivePercentage={getPositiveFeedbackPercentage} />)
            : (<Notification message="There is no feedback" />)}
        </Section>
        <RootStyle></RootStyle>
        </Container>           
);
};