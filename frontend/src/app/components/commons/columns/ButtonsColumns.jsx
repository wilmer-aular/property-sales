import React from "react";
export const EditAndDelete = (cell) => (
  <>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-sm btn-primary js-tooltip-enabled"
      >
        <i className="fa fa-pencil-alt"></i>
      </button>
      <button
        type="button"
        className="btn btn-sm btn-danger js-tooltip-enabled"
      >
        <i className="fa fa-times"></i>
      </button>
    </div>
  </>
);
