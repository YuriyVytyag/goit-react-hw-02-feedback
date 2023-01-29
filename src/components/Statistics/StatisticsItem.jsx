import PropTypes from 'prop-types';
import React from 'react';

export default function StatisticItem({ data, feedbackState }) {
  return data.map(({ label }) => (
    <li key={label}>
      {label}:{feedbackState[label]}
    </li>
  ));
}

StatisticItem.propTypes = {
  data: PropTypes.array.isRequired,
  feedbackState: PropTypes.object.isRequired,
};
