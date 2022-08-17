import React from "react";
import { Form, Row } from "react-bootstrap";
import { Label } from "../";

export const TitleAndSubTitleColumn = (
  cellContent,
  titleClass = "",
  subTitleClass = "text-muted",
  divClass = "",
  url = "",
  rowClass = "align-items-center",
  justify = ""
) => (
  <>
    <Row
      xs={12}
      className={`d-flex ${rowClass}`}
      style={{ justifyContent: `${justify}` }}
    >
      {cellContent.color && (
        <span
          className={`bullet bullet-bar  align-self-stretch`}
          style={{ marginRight: "5px", backgroundColor: cellContent.color }}
        ></span>
      )}
      <div style={{ width: "auto" }} className={`${divClass}`}>
        {cellContent.title &&
          (url ? (
            <a
              target="blank"
              className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
              href={url}
            >
              {cellContent.title}
            </a>
          ) : (
            <span
              className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
            >
              {cellContent.title}
            </span>
          ))}
        {cellContent.subTitle && (
          <small className={`font-weight-bolder ${subTitleClass}`}>
            {cellContent.subTitle}
          </small>
        )}
      </div>
    </Row>
  </>
);
export const TitleTwoColumn = (
  cellContent,
  titleClass = "font-size-lg",
  subTitleClass = "text-muted"
) => (
  <>
    {cellContent.title && (
      <span className={`font-weight-bolder  d-block ${titleClass}`}>
        {cellContent.title}
      </span>
    )}
    {cellContent.subTitle && (
      <small className={`font-weight-bolder d-block ${subTitleClass}`}>
        {cellContent.subTitle}
      </small>
    )}
    {cellContent.subTitleTwo && (
      <small className={`font-weight-bolder d-block ${subTitleClass}`}>
        {cellContent.subTitleTwo}
      </small>
    )}
  </>
);
export const FileColumn = (
  cellContent,
  titleClass = "",
  subTitleClass = "text-muted",
  typeClass = "",
  url = "",
  onClick = null
) => (
  <>
    {cellContent.title &&
      (url ? (
        <a
          target="blank"
          className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
          href={url}
        >
          {cellContent.title}
        </a>
      ) : (
        <span
          className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
        >
          {cellContent.title}
        </span>
      ))}
    {cellContent.subTitle && (
      <span className={`font-weight-bolder d-block ${subTitleClass}`}>
        {cellContent.subTitle}
      </span>
    )}
    {cellContent.dualSubTitle && (
      <span
        className={`font-weight-bolder ${typeClass}`}
        onClick={() => {
          onClick && onClick(cellContent.id);
        }}
      >
        {cellContent.dualSubTitle}
      </span>
    )}
  </>
);

export const FileActionColumn = (cellContent) => (
  <>
    {cellContent.downloadFile && (
      <span
        className={
          "overflow: visible; position: relative; display: inline-block;"
        }
      >
        <button
          href=""
          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-1"
        >
          <span>
            <i className={cellContent.downloadFile}></i>
          </span>
        </button>
      </span>
    )}
    {cellContent.editFile && (
      <span
        className={
          "overflow: visible; position: relative; display: inline-block;"
        }
      >
        <button
          href=""
          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-1"
        >
          <span>
            <i className={cellContent.editFile}></i>
          </span>
        </button>
      </span>
    )}
    {cellContent.deleteFile && (
      <span
        className={
          "overflow: visible; position: relative; display: inline-block;"
        }
      >
        <button
          href=""
          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-1"
        >
          <span>
            <i className={cellContent.deleteFile}></i>
          </span>
        </button>
      </span>
    )}
  </>
);
export const LabelColumn = (
  cellContent,
  classes = "",
  size = "lg",
  onClick = null
) => {
  const click = () => {
    onClick && onClick();
  };

  return (
    <span
      onClick={click}
      className={`label label-${size} font-weight-bold ${classes}`}
    >
      {cellContent}
    </span>
  );
};

export const LabelTwoColumn = (
  cellContent,
  classOne = "",
  classTwo = "",
  size = "lg"
) => (
  <>
    <span className={`label label-${size} font-weight-bold ${classOne}`}>
      {cellContent.one}
    </span>{" "}
    <span className={`label label-${size} font-weight-bold ${classTwo}`}>
      {cellContent.two}
    </span>
  </>
);
export const CheckColumn = (cell) => (
  <span className="svg-icon svg-icon-primary mx-5">
    <span className="svg-icon svg-icon-lg">
      <i
        style={{ display: "contents" }}
        className={`fas fa-${cell.icon} text-${cell.color} mx-2`}
      ></i>
    </span>
  </span>
);
export const TextColumn = (cellContent, classes = "") => (
  <span className={`font-weight-bold ${classes}`}>{cellContent}</span>
);
export const LabelTextColumn = (cellContent, textClass) => (
  <span className={`font-weight-bolder font-size-lg d-block ${textClass}`}>
    {cellContent}
  </span>
);
export const LabelInputColumn = (
  cellContent,
  row,
  onChange,
  disabled = false,
  type = "text",
  inputClass = "",
  typeValue = ""
) => (
  <input
    type={type}
    className={`form-control select2-hidden-accessible ${inputClass}`}
    required
    defaultValue={cellContent ?? ""}
    disabled={disabled}
    onChange={(e) => onChange(e, row, typeValue)}
  />
);

export const SelectColumn = (
  cellContent,
  row,
  options,
  onChange,
  className = "",
  type = ""
) => {
  return (
    <Form.Control
      as="select"
      onChange={(e) => onChange(e, row, type)}
      value={cellContent ?? ""}
      className={className}
    >
      <option className="text-dark">Select</option>
      {options.map((option) => (
        <option key={option.key} value={option.key} className="text-dark">
          {option.value}
        </option>
      ))}
    </Form.Control>
  );
};

export const DualTitleAndSubTitleColumn = (
  cellContent,
  titleClass = "",
  subTitleClass = "text-muted"
) => (
  <>
    {cellContent.titleCheckIn && (
      <span className={`font-weight-bolder d-block ${titleClass}`}>
        {cellContent.titleCheckIn}
      </span>
    )}
    {cellContent.subTitleCheckIn && (
      <span className={`font-weight-bold ${subTitleClass}`}>
        {cellContent.subTitleCheckIn}
      </span>
    )}
    {cellContent.titleCheckOut && (
      <span className={`font-weight-bolder d-block ${titleClass}`}>
        {cellContent.titleCheckOut}
      </span>
    )}
    {cellContent.subTitleCheckOut && (
      <span className={`font-weight-bold ${subTitleClass}`}>
        {cellContent.subTitleCheckOut}
      </span>
    )}
  </>
);

export const ColumnImage = ( img ) => (
  <>
    <span>
        {img && (
          <div >
            <img style={{width: "100%", maxWidth : "40px" , height : "32px"}} src={img} alt="" />
          </div>
        )}
    </span>
  </>
);

export const ImageColumn = (
  cellContent,
  titleClass,
  subTitleClass,
  url = ""
) => (
  <>
    <span>
      <div className="d-flex align-items-center">
        {cellContent.image && (
          <div className="symbol symbol-40 symbol-sm flex-shrink-0">
            <img src={cellContent.image} alt="" />
          </div>
        )}
        <div className="ml-4">
          {cellContent.title &&
            (url ? (
              <a
                target="blank"
                className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
                href={url}
              >
                {cellContent.title}
              </a>
            ) : (
              <span
                className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
              >
                {cellContent.title}
              </span>
            ))}
          {cellContent.subTitle && (
            <span className={`font-weight-bolder ${subTitleClass}`}>
              {cellContent.subTitle}
            </span>
          )}
        </div>
      </div>
    </span>
  </>
);

export const ImageSubTitleTwoColumn = (
  cellContent,
  titleClass,
  subTitleClass,
  subTitleClassTwo = ""
) => (
  <>
    <span>
      <div className="d-flex align-items-center">
        {cellContent.image && (
          <div className="symbol symbol-40 symbol-sm flex-shrink-0">
            <img src={cellContent.image} alt="" />
          </div>
        )}
        <div className="ml-4">
          {cellContent.title && (
            <span
              className={`font-weight-bolder font-size-lg d-block ${titleClass}`}
            >
              {cellContent.title}
            </span>
          )}

          {cellContent.subTitle && (
            <span className={`font-weight-bolder d-block ${subTitleClass}`}>
              {cellContent.subTitle}
            </span>
          )}
          {cellContent.subTitleTwo && (
            <span className={`font-weight-bolder d-block ${subTitleClassTwo}`}>
              {cellContent.subTitleTwo}
            </span>
          )}
        </div>
      </div>
    </span>
  </>
);
export const MultiLabel = (cell) => {
  return cell?.map((item) => (
    <Label variant="info" className="mr-2" key={item}>
      {item}
    </Label>
  ));
};
export const ProgressBar = (data, color) => (
  <>
    <div className="d-flex flex-column w-100 mr-2">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className={`text-${color} mr-2 font-size-sm font-weight-bold`}>
          {data.progress}%
        </span>
        <span className="text-dark-75 font-size-sm font-weight-bolder">
          {data.title}
        </span>
      </div>
      <div className="progress progress-xs w-100">
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={data.progress}
          style={{ width: `${data.progress}%` }}
          role="progressbar"
          className={`progress-bar bg-${color}`}
        ></div>
      </div>
    </div>
  </>
);
