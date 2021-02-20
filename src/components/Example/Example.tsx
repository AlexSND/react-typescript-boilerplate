import React from 'react';
import ReactLogo from 'images/ReactLogo.svg';
import styles from './Example.module.scss';

interface Props {
  text: string
}

const Example = ({ text }: Props) => (
  <div className={styles.wrapper}>
    <h1>
      {text}
      <span role="img" aria-label="emoji">😎</span>
    </h1>
    <div className={styles.reactLogo}>
      <img src={ReactLogo} alt="logo" />
    </div>
  </div>
);

export default Example;
