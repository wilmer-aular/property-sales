import React from "react";
import { Form } from "react-bootstrap";
import { FaIcon, Label } from "../";
import Select from "react-select";
import { newShowError, showError } from "@src/helpers/forms-helper";

const createTitle = (title, icon = null, classIcon = "text-primary mr-2") => (
  <>
    <Form.Label>
      {icon && <FaIcon icon={icon} className={classIcon} />}
      <p style={{ fontWeight: "600", marginBottom: "0px", color: "#5e6278" }}>
        {title}
      </p>
    </Form.Label>
  </>
);

export const GeneriRegister = (
  key,
  register,
  error,
  title = null,
  placeholder = "",
  type = "text",
  icon = null,
  classIcon
) => {
  return (
    <>
      <Form.Group controlId={key}>
        {title && createTitle(title, icon, classIcon)}
        <Form.Control
          type={type}
          placeholder={title ?? placeholder}
          isInvalid={error}
          {...register}
        ></Form.Control>
        {newShowError(error)}
      </Form.Group>
    </>
  );
};
export const TextareaRegister = (
  key,
  register,
  error,
  title = null,
  placeholder = "",
  height = 100,
  icon = null,
  classIcon
) => {
  return (
    <>
      <Form.Group controlId={key}>
        {title && createTitle(title, icon, classIcon)}
        <textarea
          className="form-control"
          style={{ height: `${height}px` }}
          placeholder={title ?? placeholder}
          isInvalid={error}
          {...register}
        />
        {newShowError(error)}
      </Form.Group>
    </>
  );
};

export const TypeSeletRegister = (
  list,
  key,
  register,
  error,
  title = null,
  placeholder = "",
  icon = null,
  classIcon
) => {
  const view = title ?? placeholder;
  return (
    <>
      <Form.Group controlId={key}>
        {title && createTitle(title, icon, classIcon)}
        <Form.Control
          as="select"
          placeholder={title ?? placeholder}
          isInvalid={error}
          {...register}
        >
          <option value="">{view}</option>
          {list?.map((i) => (
            <option key={i.value} value={i.value}>
              {i.key}
            </option>
          ))}
        </Form.Control>
        {newShowError(error)}
      </Form.Group>
    </>
  );
};

export const TypeCompoSelect = (
  list,
  key,
  error,
  handleChange,
  title = null,
  placeholder = "",
  icon = null,
  classIcon
) => {
  const view = title ?? placeholder;
  return (
    <>
      <Form.Group controlId={key}>
        {title && createTitle(title, icon, classIcon)}

        <Select
          className="form-control-solid"
          placeholder={title ?? placeholder}
          options={list}
          onChange={handleChange}
        ></Select>
        {showError(error[key], `${view}is required`)}
      </Form.Group>
    </>
  );
};

export const TypeCheckbox = (key, register, error, title = null) => {
  return (
    <>
      <Form.Group controlId={key}>
        <label className="checkbox checkbox-lg">
          <input type="checkbox" name="Checkboxes3_1" {...register} />
          <span className="mr-3"></span>
          <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
            <span className="text-dark-75 text-hover-primary font-size-lg text-justify">
              {title}
            </span>
          </div>
        </label>
        {newShowError(error)}
      </Form.Group>
    </>
  );
};
export const typeSelectForLabel = (
  list,
  listLabel,
  remove,
  key,
  selector,
  error,
  title = null,
  placeholder = "",
  icon = null,
  classIcon
) => {
  const view = title ?? placeholder;
  return (
    <>
      <Form.Group controlId={key}>
        {title && createTitle(title, icon, classIcon)}
        <Form.Control
          as="select"
          placeholder={title ?? placeholder}
          isInvalid={error}
          onChange={(e) => selector(e.target.value)}
        >
          <option value="">{view}</option>
          {list?.map((i) => (
            <option key={i.key} value={i.value}>
              {i.value}
            </option>
          ))}
        </Form.Control>
        {newShowError(error)}

        {listLabel?.map((c) => (
          <Label variant="info" className="mt-2 mr-2" key={c}>
            {c}
            <span
              onClick={() => {
                remove(c);
              }}
              className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ml-1"
            >
              <i className="ki ki-bold-close icon-xs text-muted"></i>
            </span>
          </Label>
        ))}
      </Form.Group>
    </>
  );
};
