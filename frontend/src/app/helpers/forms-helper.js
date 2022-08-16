import React from "react";

export const required = {
  required: {
    value: true,
    message: "The field is required",
  },
};

export const emailFormat = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "The email format is not valid.",
  },
};

export const numberFormat = ({ min, max }) => {
  const format = {
    pattern: {
      value: /^[0-9,$]*$/,
      message: "The phone format is not valid.",
    },
  };
  if (min) {
    format.minLength = {
      value: min,
      message: `Must have minimum ${min} numbers.`,
    };
  }
  if (max) {
    format.maxLength = {
      value: max,
      message: `Must have maximum ${max} numbers.`,
    };
  }

  return format;
};

export const showError = (error, message) =>
  error && (
    <span className="font-weight-bold font-size-sm my-1 text-danger">
      {message}
    </span>
  );

export const newShowError = (error) => {
  return (
    error && (
      <span className="font-weight-bold font-size-sm my-1 text-danger">
        {error.message}
      </span>
    )
  );
};

export const optionsMap = {
  componentRestrictions: { country: ["ca"] },
};
