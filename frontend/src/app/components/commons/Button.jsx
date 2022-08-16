import React from "react";
import FaIcon from "./FaIcon";
const Button = ({
  styleButtom,
  className = "",
  variant = "primary",
  titleMsj = " ",
  font,
  onClick,
  disabled,
  icon,
  children,
  styleIcon,
  type,
}) => {
  const fontSize = font ? `font-size-${font}` : "";
  const iconComponent = icon ? (
    <FaIcon icon={icon} className={styleIcon} />
  ) : (
    ""
  );

  const propsButton = { disabled: disabled ? "disabled" : disabled, type };
  return (
    <button
      title={titleMsj}
      style={styleButtom}
      className={`btn btn-${variant} font-weight-bolder ${fontSize} ${className}`}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      disabled={disabled}
      {...propsButton}
    >
      {iconComponent}
      {children}
    </button>
  );
};

export default Button;
