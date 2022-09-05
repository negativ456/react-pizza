import React from "react";
import styles from "./ErrorBlock.module.scss";

const ErrorBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h2>Ошибка при получении пицц</h2>
      <p>Попробуйте перезагрузить страницу</p>
    </div>
  );
};

export default ErrorBlock;
