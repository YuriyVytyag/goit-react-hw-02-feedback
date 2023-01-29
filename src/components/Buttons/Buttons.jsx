import React from 'react';
// import PropTypes from 'prop-types';
import { ButtonItem } from 'components/Counter/Counter.styled';

export default function Button({ title, onClick }) {
  return (
    <ButtonItem>
      <button type="button" onClick={onClick}>
        {title}
      </button>
    </ButtonItem>
  );
}
