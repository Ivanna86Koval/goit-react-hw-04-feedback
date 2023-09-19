import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { RootStyle } from './RootStyle/RootStyle.styled';

export class App extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    handleClickOptions = (option) => {
        this.setState(pState => {
            return {
               [option] : pState[option] + 1
             
            };
        })   
    }

    countTotalFeedback ({ good, neutral, bad}) {
         return good + neutral + bad
         
    }

    countPositiveFeedbackPercentage({good}, total) {
        return ((good / total) * 100) ^ 0;
  }

    render() {
      const { good, neutral, bad } = this.state;
      const getTotalFeedBack = this.countTotalFeedback(this.state);
      const getPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(this.state, getTotalFeedBack)
      return ( 
          <>
        <Section  title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClickOptions} />
        </Section>
         
          <Section title="Statistics">
            {getTotalFeedBack ?
              <Statistics good={good} neutral={neutral} bad={bad} total={getTotalFeedBack} positivePercentage={getPositiveFeedbackPercentage} />
              : <Notification message="There is no feedback" />}
          </Section>
          <RootStyle></RootStyle>
          </>
           
          
              
)}

};