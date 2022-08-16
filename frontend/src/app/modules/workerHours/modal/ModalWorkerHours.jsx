import React, { useCallback, useEffect, useState } from "react";
import { GeneriRegister, ModalSave } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from "react-bootstrap";
import { connector } from "@src/services";
import { useNotifyContent } from "@src/providers/NotifyProvider";
//import { required } from "@src/helpers/forms-helper";

const { update } = connector("workerHour");

const ModalWorkerHours = ({ id, workerHours, refresh }) => {
  const { handleNotify } = useNotifyContent();
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const propsModal = { show, handleShow, handleClose };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = async (value) => {
    const { id } = value;
    try {
      await update(id, value);
      handleNotify();
      handleClose();
    } catch (err) {
      console.error(err);
      handleNotify("error", "Ocurrio un Error");
    } finally {
      refresh(null);
    }
  };
  const setHourWorker = useCallback(
    (id, list) => {
      const workerHour = list.find((i) => i.id === id);
      setValue("id", workerHour?.id);
      setValue("initHourMorning", workerHour?.initHourMorning);
      setValue("endHourMorning", workerHour?.endHourMorning);
      setValue("initHourAfternoon", workerHour?.initHourAfternoon);
      setValue("endHourAfternoon", workerHour?.endHourAfternoon);
      setName(`${workerHour?.worker ?? ""}`);
    },
    [setValue, setName]
  );

  useEffect(() => {
    setHourWorker(id, workerHours);
  }, [id, workerHours, setHourWorker]);

  const handleRegister = (key, require = "") => {
    return register(key, require);
  };

  return (
    <>
      <ModalSave
        onSave={handleSubmit(onSave)}
        size=""
        iconHeader="sync"
        title={`${name}`}
        saveText="Update"
        variant="primary"
        deleteText="Cancel"
        variantDelete="danger"
        titleButton=" Actualizar?"
        buttonText=" Editar"
        iconButtom="sync"
        variantButtom="default"
        classButtom={" btn-hover-primary btn-primary mr-3 btn-sm"}
        {...propsModal}
      >
        <>
          <Form>
            <Container className="px-0">
              <Col xs={12}>
                <h3 style={{ textAlign: "center" }}>Horario de la Mañana</h3>
                <Row className="mt-10">
                  <Col xs={6}>
                    {GeneriRegister(
                      "initHourMorning",
                      handleRegister("initHourMorning"),
                      errors.initHourMorning,
                      "Hora de inicio",
                      null,
                      "time"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "endHourMorning",
                      handleRegister("endHourMorning"),
                      errors.endHourMorning,
                      "Hora de Finalizacion",
                      null,
                      "time"
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <h3 style={{ textAlign: "center" }}>Horario de la tarde</h3>
                <Row className="mt-10">
                  <Col xs={6}>
                    {GeneriRegister(
                      "initHourAfternoon",
                      handleRegister("initHourAfternoon"),
                      errors.initHourAfternoon,
                      "Hora de inicio",
                      null,
                      "time"
                    )}
                  </Col>
                  <Col xs={6}>
                    {GeneriRegister(
                      "endHourAfternoon",
                      handleRegister("endHourAfternoon"),
                      errors.endHourAfternoon,
                      "Hora de Finalizacion",
                      null,
                      "time"
                    )}
                  </Col>
                </Row>
              </Col>
            </Container>
          </Form>
        </>
      </ModalSave>
    </>
  );
};
export default ModalWorkerHours;
