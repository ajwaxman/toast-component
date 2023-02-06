import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ]

    setToasts(nextToast);
  }

  function dismissToast(id) {
    setToasts(toasts.filter(t => {
      return t.id !== id;
    }))
  } 

  function dismissAllToasts() {
    setToasts([]);
  }

  return(
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, dismissToast, dismissAllToasts}}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
