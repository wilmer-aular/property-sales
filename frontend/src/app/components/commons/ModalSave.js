import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../";

const ModalSave = ({
  children,
  onSave,
  title,
  buttonText,
  iconSave,
  iconDelete,
  deleteText = "Close",
  saveText = "Save changes",
  buttonSave,
  handleSend,
  iconSend,
  sendText,
  disabled,
  show = false,
  handleShow,
  handleClose,
  iconButtom = "sync",
  iconColor = "text-secundary",
  variant = "success",
  variantDelete = "danger",
  classButtom = " ",
  variantButtom = " ",
  titleButton,
  size = "none",
  styleButtom,
  showFooter = true,
  optionScrollable = false,
  secundaryIcon = "",
  dialogClass = "",
  classTitleHeader = "text-white font-weight-bolder pt-2",
  iconHeader,
  styleIconHeader,
  classIconHeader,
  buttonStyle,
  classBody = "",
  styleModal = {},
  withoutButtonSave = false,
}) => {
  const handleSave = () => {
    onSave();
    // handleClose();
  };
  const bottomAdd = (
    <>
      <Button
        icon={iconButtom}
        title={titleButton}
        styleIcon={iconColor}
        styleButtom={styleButtom}
        disabled={disabled}
        className={classButtom}
        variant={variantButtom}
        onClick={handleShow}
        font="sm"
      >
        {secundaryIcon && <i className={`fas fa-${secundaryIcon}`}></i>}
        {buttonText}
      </Button>
    </>
  );
  const showButtonSave = withoutButtonSave ? (
    ""
  ) : !buttonSave ? (
    <Button
      styleButtom={buttonStyle}
      variant={variant}
      onClick={handleSave}
      icon={iconSave}
    >
      {saveText}
    </Button>
  ) : (
    <Button
      styleButtom={buttonStyle}
      variant={variant}
      onClick={handleSend}
      icon={iconSend}
    >
      {sendText}
    </Button>
  );
  return (
    <>
      {handleShow && bottomAdd}
      <Modal
        show={show}
        onHide={handleClose}
        size={size}
        style={styleModal}
        className="br-2"
        dialogClassName={dialogClass}
        scrollable={optionScrollable}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#181c32",
            backgroundImage: "linear-gradient(180deg,#3b3e51,#181c32)",
          }}
        >
          <Modal.Title className={classTitleHeader}>
            <i
              className={`fa fa-${iconHeader} ${classIconHeader}`}
              style={styleIconHeader}
            ></i>{" "}
            &nbsp;
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classBody}>{children}</Modal.Body>
        {showFooter && (
          <Modal.Footer
            style={{
              backgroundColor: "#181c32",
              backgroundImage: "linear-gradient(180deg,#3b3e51,#181c32)",
            }}
          >
            <Button
              variant={variantDelete}
              onClick={handleClose}
              icon={iconDelete}
              styleButtom={buttonStyle}
            >
              {deleteText}
            </Button>
            {showButtonSave}
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
export default ModalSave;
