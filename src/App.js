import { Component, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { RootStyle } from './RootStyle/RootStyle.styled';

export const App = () => {
    const [good, setGood] = useState (0);
    const [neutral, setNeutral] = useState (0);
    const [bad, setBad] = useState (0);

   const handleClickOptions = (option) => {
                   return {
               [option] : pState[option] + 1
             
            };  
    }
    //const { good, neutral, bad } = state;

   const countTotalFeedback ({ good, neutral, bad}) {
        return good + neutral + bad
   }

   const getTotalFeedBack = countTotalFeedback();

   const countPositiveFeedbackPercentage ({good}, total) {
    return ((good / total) * 100) ^ 0;
}

const getPositiveFeedbackPercentage = countPositiveFeedbackPercentage();

     return ( 
        <>
      <Section  title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} 
          onLeaveFeedback={this.handleClickOptions} />
      </Section>
       
        <Section title="Statistics">
          {getTotalFeedBack ?
            <Statistics good={good} neutral={neutral} bad={bad} 
            total={getTotalFeedBack} positivePercentage={getPositiveFeedbackPercentage} />
            : <Notification message="There is no feedback" />}
        </Section>
        <RootStyle></RootStyle>
        </>
         
        
            
)
}