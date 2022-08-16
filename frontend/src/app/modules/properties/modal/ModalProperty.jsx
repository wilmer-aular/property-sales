import React, { useCallback, useEffect } from "react";
import { GeneriRegister, ModalSave, TypeSeletRegister } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";
import { required,} from "@src/helpers/forms-helper";
import { listType } from "../util"

const ModalProperty = ({ property, show, handleShow, handleClose, onSave }) => {
  const propsModal = { show, handleShow, handleClose };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    const save = await onSave(value);
    if (save) {
      reset();
    }
  };


  const setProperty = useCallback(
    (property) => {
      setValue("type", property.type);
      setValue("price", property.price);
      setValue("country", property.country);
      setValue("city", property.city);
      setValue("address", property.address);
      setValue("numberOfRooms", property.numberOfRooms);
      setValue("numberOfBathrooms", property.numberOfBathrooms);
      setValue("id", property._id);
    },
    [setValue]
  );

  useEffect(() => {
    if (property && Object.keys(property).length) {
      setProperty(property);
    } else {
      reset();
    }
  }, [property, reset, setProperty]);

  const handleRegister = (key, require = "") => {
    return register(key, require);
  };

 
  return (
    <>
      <ModalSave
        onSave={handleSubmit(onSubmit)}
        size="lg"
        iconHeader="sync"
        title="Property information"
        saveText="Save"
        variant="primary"
        deleteText="Close"
        variantDelete="danger"
        titleButton=" Agregar Nuevo?"
        buttonText=" Agregar Nuevo"
        iconButtom="sync"
        variantButtom="default"
        classButtom={" btn-hover-primary btn-primary btn-sm"}
        {...propsModal}
      >
        <>
          <Form>
            <Row>
              <Col xs={12}>
                <p >They are required fields <span style={{ color: "red" }}>*</span></p>
                <Row className="mt-10">
                  <Col xs={6}>
                      {TypeSeletRegister(
                        listType,
                        "Type of property",
                        handleRegister("type", required),
                        errors.type,
                        "Type of property *"
                      )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "price",
                      handleRegister("price", required),
                      errors.price,
                      "Price *",
                      null,
                      "number"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "country",
                      handleRegister("country", required),
                      errors.country,
                      "Country *",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "City",
                      handleRegister("city", required),
                      errors.city,
                      "City *",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={12}>
                    {GeneriRegister(
                      "Address",
                      handleRegister("address", required),
                      errors.address,
                      "Address *",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "number Of Rooms",
                      handleRegister("numberOfRooms", required),
                      errors.numberOfRooms,
                      "Number Of Rooms *",
                      null,
                      "number"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "Number Of Bathrooms",
                      handleRegister("numberOfBathrooms", required),
                      errors.numberOfBathrooms,
                      "Number Of Bathrooms *",
                      null,
                      "number"
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </>
      </ModalSave>
    </>
  );
};
export default ModalProperty;
