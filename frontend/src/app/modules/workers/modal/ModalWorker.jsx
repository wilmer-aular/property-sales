import React, { useCallback, useEffect, useState, useMemo } from "react";
import moment from "moment";
import { GeneriRegister, ModalSave, TypeSeletRegister } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";
import { required, numberFormat, emailFormat } from "@src/helpers/forms-helper";
import { valueTypeOperator } from "../util";

const ModalWorker = ({ worker, show, handleShow, handleClose, onSave }) => {
  const [name, setName] = useState(null);
  const propsModal = { show, handleShow, handleClose };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    value.dateOfBirth = moment(value.dateOfBirth).format("yyyy-MM-DD");
    const save = await onSave(value);
    if (save) {
      reset();
    }
  };

  const { type } = watch();

  const handleSchedule = useCallback(
    (value) => {
      setValue("fromOne", value?.fromOne);
      setValue("toOne", value?.toOne);
      setValue("initOneMorning", value?.initOneMorning);
      setValue("endOneMorning", value?.endOneMorning);
      setValue("initOneAfternoon", value?.initOneAfternoon);
      setValue("endOneAfternoon", value?.endOneAfternoon);
      setValue("toTwo", value?.toTwo);
      setValue("fromTwo", value?.fromTwo);
      setValue("initHourTwo", value?.initHourTwo);
      setValue("endHourTwo", value?.endHourTwo);
    },
    [setValue]
  );

  useMemo(() => {
    if (type === "Operador") {
      handleSchedule(valueTypeOperator);
    } else {
      !Object.keys(worker).length && handleSchedule({});
    }
  }, [worker, type, handleSchedule]);

  const setWorker = useCallback(
    (worker) => {
      setValue("id", worker.id);
      setValue("name", worker.name);
      setValue("lastName", worker.lastName);
      setValue("phone", worker.phone);
      setValue("email", worker.email);
      setValue("hourlyRate", worker.hourlyRate);
      setValue("dateOfBirth", worker.dateOfBirth);
      setValue("dni", worker.dni);
      setValue("type", worker.type);
      handleSchedule(worker);
    },
    [setValue, handleSchedule]
  );

  useEffect(() => {
    if (worker && Object.keys(worker).length) {
      setWorker(worker);
      setName(`${worker.name} ${worker.lastName ?? ""}`);
    } else {
      reset();
    }
  }, [worker, reset, setWorker]);

  const handleRegister = (key, require = "") => {
    return register(key, require);
  };

  const listType = [
    { key: "Oficina", value: "Oficina" },
    { key: "Operador", value: "Operador" },
  ];
  const listSchedule = [
    { key: "Lunes", value: "Lunes" },
    { key: "Martes", value: "Martes" },
    { key: "Miercoles", value: "Miercoles" },
    { key: "Jueves", value: "Jueves" },
    { key: "Viernes", value: "Viernes" },
  ];
  return (
    <>
      <ModalSave
        onSave={handleSubmit(onSubmit)}
        size="lg"
        iconHeader="sync"
        title={`${name ? name : " Son Campos Requeridos *"}`}
        saveText="Guardar"
        variant="primary"
        deleteText="Cancelar"
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
                <h3 style={{ textAlign: "center" }}>Informacion Personal</h3>
                <Row className="mt-10">
                  <Col xs={6}>
                    {GeneriRegister(
                      "name",
                      handleRegister("name", required),
                      errors.name,
                      "Nombre",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "lastName",
                      handleRegister("lastName", required),
                      errors.lastName,
                      "Apellidos",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "dni",
                      handleRegister("dni", required),
                      errors.dni,
                      "DNI",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "dateOfBirth",
                      handleRegister("dateOfBirth", { ...numberFormat }),
                      errors.dateOfBirth,
                      "Fecha de Nacimiento",
                      null,
                      "date"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "phone",
                      handleRegister("phone", { ...numberFormat }),
                      errors.phone,
                      "Numero Telefonico",
                      null,
                      "text"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "email",
                      handleRegister("email", { ...emailFormat }),
                      errors.email,
                      "Direccion de Email",
                      null,
                      "text"
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <h3 style={{ textAlign: "center" }}>Informacion Laboral</h3>
                <Row className="mt-10">
                  <Col xs={4}>
                    {TypeSeletRegister(
                      listType,
                      "type",
                      handleRegister("type", required),
                      errors.type,
                      "Tipo de personal*"
                    )}
                  </Col>
                  <Col xs={4}>
                    {GeneriRegister(
                      "hourlyRate",
                      handleRegister("hourlyRate"),
                      errors.hourlyRate,
                      "Tarifa por Hora",
                      null,
                      "number"
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <h3 style={{ textAlign: "center" }}>Horario</h3>
                <Row className="mt-10">
                  <Col xs={6}>
                    <Row className="mt-10">
                      <Col xs={6}>
                        {TypeSeletRegister(
                          listSchedule,
                          "fromOne",
                          handleRegister("fromOne", required),
                          errors.fromOne,
                          "Desde *"
                        )}
                      </Col>
                      <Col xs={6}>
                        {TypeSeletRegister(
                          listSchedule,
                          "toOne",
                          handleRegister("toOne", required),
                          errors.toOne,
                          "Hasta *"
                        )}
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={6}>
                    <Col xs={12}>
                      <h5 style={{ textAlign: "center" }}>Mañana</h5>
                      <Row>
                        <Col xs={6}>
                          {GeneriRegister(
                            "initOneMorning",
                            handleRegister("initOneMorning", required),
                            errors.initOneMorning,
                            "Hora de inicio *",
                            null,
                            "time"
                          )}
                        </Col>
                        <Col xs={6}>
                          {GeneriRegister(
                            "endOneMorning",
                            handleRegister("endOneMorning", required),
                            errors.endOneMorning,
                            "Hora de Finalizacion *",
                            null,
                            "time"
                          )}
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <h5 style={{ textAlign: "center" }}>Tarde</h5>
                      <Row>
                        <Col xs={6}>
                          {GeneriRegister(
                            "initOneAfternoon",
                            handleRegister("initOneAfternoon"),
                            errors.initOneAfternoon,
                            "Hora de inicio *",
                            null,
                            "time"
                          )}
                        </Col>
                        <Col xs={6}>
                          {GeneriRegister(
                            "endOneAfternoon",
                            handleRegister("endOneAfternoon"),
                            errors.endOneAfternoon,
                            "Hora de Finalizacion *",
                            null,
                            "time"
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <h3 style={{ textAlign: "center" }}>Horario Adicional</h3>
                <Row className="mt-10">
                  <Col xs={3}>
                    {TypeSeletRegister(
                      listSchedule,
                      "fromTwo",
                      handleRegister("fromTwo"),
                      errors.fromTwo,
                      "Desde "
                    )}
                  </Col>
                  <Col xs={3}>
                    {TypeSeletRegister(
                      listSchedule,
                      "toTwo",
                      handleRegister("toTwo"),
                      errors.toTwo,
                      "Hasta "
                    )}
                  </Col>
                  <Col xs={3}>
                    {GeneriRegister(
                      "initHourTwo",
                      handleRegister("initHourTwo"),
                      errors.initHourTwo,
                      "Hora de inicio",
                      null,
                      "time"
                    )}
                  </Col>

                  <Col xs={3}>
                    {GeneriRegister(
                      "endHourTwo",
                      handleRegister("endHourTwo"),
                      errors.endHourTwo,
                      "Hora de Finalizacion",
                      null,
                      "time"
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
export default ModalWorker;
