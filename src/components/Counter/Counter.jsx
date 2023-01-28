// import css from './Counter';
import { Component } from 'react';
import Buttons from 'components/Buttons/Buttons';
import css from './Counter.module.css';
import StatisticItem from 'components/Statistics/StatisticsItem';

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

  goodBtn = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  neutralBtn = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  badBtn = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
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
        <Buttons
          goodBtn={this.goodBtn}
          neutralBtn={this.neutralBtn}
          badBtn={this.badBtn}
        />
        <h3 className={css.statisticHeader}>Statistics</h3>
        {/* <div className={css.statisticBlock}>
          <span className={css.statisticItem}>Good:{this.state.good}</span>
          <span className={css.statisticItem}>
            Neutral:{this.state.neutral}
          </span>
          <span className={css.statisticItem}>Bad:{this.state.bad}</span>
        </div> */}
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
