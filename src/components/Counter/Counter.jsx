// import css from './Counter';
import { Component } from 'react';
import Button from 'components/Buttons/Buttons';
import StatisticItem from 'components/Statistics/StatisticsItem';
import { ButtonWrapper, StatisticHeader } from './Counter.styled';

const data = [{ label: 'good' }, { label: 'neutral' }, { label: 'bad' }];

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    return (
      <div className="Counter">
        <ButtonWrapper>
          {data.map(({ label }, index) => {
            return (
              <Button
                key={label}
                title={label}
                onClick={() => this.handleIncrement(label)}
              />
            );
          })}
        </ButtonWrapper>
        <StatisticHeader>Statistics</StatisticHeader>
        {this.countTotalFeedback() ? (
          <div>
            <ul>
              <StatisticItem data={data} feedbackState={this.state} />
            </ul>
            <p>Total:{this.countTotalFeedback()}</p>
            <p>Total:{this.countPositiveFeedbackPercentage().toFixed(2)}%</p>
          </div>
        ) : (
          <span>No feedback given </span>
        )}
      </div>
    );
  }
}

export default Counter;
