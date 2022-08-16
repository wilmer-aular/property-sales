import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
const NotifyContext = createContext();

export function useNotifyContent() {
  return useContext(NotifyContext);
}

export const NotifyConsumer = NotifyContext.Consumer;

export function NotifyProvider({ children }) {
  const handleNotify = (msj = "Successful task", type = "success") => {
    toast[type](msj, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const value = {
    handleNotify,
  };
  return (
    <NotifyContext.Provider value={value}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      {children}
    </NotifyContext.Provider>
  );
}
