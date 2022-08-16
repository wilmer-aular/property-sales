import React from "react";

export const CardTabs = ({
  children,
  contentProps,
  classes,
  header = null,
  subHeader = null,
  subHeaderTwo = null,
  tools = null,
  classHeader = "",
  classTitle = "",
  styleHeader,
  icon,
  styleIcon,
  classIcon,
  classSubHeader = "font-size-sm text-muted ml-2",
}) => {
  return (
    <div className={`block block-themed ${classes ?? ""}`}>
      {header && (
        <div
          className={`card-header text-left ${classHeader}`}
          style={styleHeader}
        >
          <div className="card-title">
            <div className="card-label">
              <div className={`card-label font-weight-bolder ${classTitle}`}>
                <i
                  className={`fa fa-${icon} ${classIcon}`}
                  style={styleIcon}
                ></i>{" "}
                &nbsp;
                {header}
              </div>
              {subHeader && <div className={classSubHeader}>{subHeader}</div>}
              {subHeaderTwo && (
                <div className={classSubHeader}>{subHeaderTwo}</div>
              )}
            </div>
          </div>
          {tools && <div className="card-toolbar d-flex">{tools}</div>}
        </div>
      )}
      <div
        className={`block-content pb-3 tab-content ${
          contentProps?.className ?? ""
        } `}
      >
        <div className="separator separator-solid my-1"></div>
        {children}
      </div>
    </div>
  );
};
