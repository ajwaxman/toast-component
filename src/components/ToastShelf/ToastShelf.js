import React, { useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  useEffect(() => {
    const keyPressed = (e) => {
      // If the escape key is pressed...
      if (e.keyCode === 27) {
        setToasts([]);
      }
    };

    document.addEventListener("keydown", keyPressed);

    return () => {
      document.removeEventListener("keydown", keyPressed);
    }

  }, []);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id, variant, message}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
