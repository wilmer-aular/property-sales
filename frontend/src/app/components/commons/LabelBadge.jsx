import React from 'react';

export const LabelBadge = ({ title, number }) => {
  return (
    <>
      <span>{title} </span>
      <span className="badge badge-primary badge-pill">{number}</span>
    </>
  );
};
