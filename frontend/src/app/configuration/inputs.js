import React from "react";
export const required = { required: true };

export const showError = (error, message) =>
  error && (
    <span className="font-weight-bold font-size-sm my-1 text-danger">
      {message}
    </span>
  );
