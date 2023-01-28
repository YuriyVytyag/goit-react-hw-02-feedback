import React from 'react';
import css from './Buttons.module.css';

const Buttons = ({ goodBtn, neutralBtn, badBtn }) => {
  return (
    <div className="buttons">
      <h2 className={css.header}>Please leave feedback</h2>
      <button className={css.buttonItem} type="button" onClick={goodBtn}>
        Good
      </button>
      <button className={css.buttonItem} type="button" onClick={neutralBtn}>
        Neutral
      </button>
      <button className={css.buttonItem} type="button" onClick={badBtn}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
