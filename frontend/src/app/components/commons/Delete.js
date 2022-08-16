import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "..";
import { useNotifyContent } from "@src/providers/NotifyProvider";

const Delete = ({
  disabled,
  children,
  onRemove,
  textButton,
  title,
  styleIcon = "text-danger",
  className = "",
  textAction = " Eliminar",
  icon = "trash",
  msjButton = "",
  valueShow = true,
}) => {
  const { handleNotify } = useNotifyContent();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (valueShow === true) {
      setShow(valueShow);
    } else {
      handleNotify("Esta función estará disponible próximamente", "warn");
    }
  };
  const handleClose = () => setShow(false);
  const handleRemove = async () => {
    try {
      await onRemove();
      handleNotify();
    } catch (err) {
      console.error(err);
      handleNotify("Ocurrio un Error", "error");
    } finally {
      handleClose();
    }
  };
  const buttonRemove = (
    <>
      <Button
        disabled={disabled}
        icon={icon}
        styleIcon={styleIcon}
        className={`btn-hover-danger btn-icon mr-0 ${className}`}
        font="sm"
        onClick={handleShow}
        variant="default"
        titleMsj={msjButton}
      >
        {textButton}
      </Button>
    </>
  );
  return (
    <>
      {buttonRemove}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {children && <Modal.Body>{children}</Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" icon={icon} onClick={handleRemove}>
            {textAction}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Delete;
