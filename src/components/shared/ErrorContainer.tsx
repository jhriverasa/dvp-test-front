import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// A simple React Toastify wrapper
const ErrorContainer = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

// Funcitons that shows message
export const showErrorToast = (message: string) => {
  toast.error(message);
};

export default ErrorContainer;
