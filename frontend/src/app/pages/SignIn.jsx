import React from "react";
import { GeneriRegister, Button } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from "react-bootstrap";
import { login } from "@src/services/auth.service";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { required, emailFormat } from "@src/helpers/forms-helper";

export const SignIn = (props) => {
  const { handleNotify } = useNotifyContent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSave = async (value) => {
    try {
      const token = await login(value);
      console.info({ token });

      handleNotify();
    } catch (err) {
      console.error(err);
      handleNotify("Ocurrio un Error", "error");
    }
  };
  const handleRegister = (key, require = "") => {
    return register(key, require);
  };

  return (
    <>
      <main id="main-container">
        <div className="bg-gd-dusk">
          <div className="hero-static content content-full bg-body-extra-light">
            <div className="py-4 px-1 text-center mb-4">
              <h1 className="h3 fw-bold mt-5 mb-2">Crear Nuevo Usuario</h1>
              <h2 className="h5 fw-medium text-muted mb-0">
                Por favor, añada sus datos...
              </h2>
            </div>
            <div className="row justify-content-center px-1">
              <div className="col-sm-8 col-md-6 col-xl-4">
                <Form>
                  <Container className="px-0">
                    <Col xs={12}>
                      {GeneriRegister(
                        "email",
                        handleRegister("email", {
                          ...required,
                          ...emailFormat,
                        }),
                        errors.email,
                        "Direccion de Email *",
                        null,
                        "email"
                      )}
                    </Col>
                    <Col xs={12}>
                      {GeneriRegister(
                        "password",
                        handleRegister("password", required),
                        errors.password,
                        "Contraseña * ",
                        null,
                        "password"
                      )}
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <Col xs={12} className="mb-2">
                          <Button
                            title="Editar?"
                            className="btn btn-lg btn-alt-primary w-100 py-3 "
                            // onClick={handleSubmit(onSave)}
                          >
                            Iniciar Sesión
                          </Button>
                        </Col>
                        <Col xs={6} className="pr-1">
                          <Button
                            title="Editar?"
                            className="btn btn-default  btn-hover-secondary btn-secondary btn-sm w-100"
                            onClick={handleSubmit(onSave)}
                          >
                            Nueva Cuenta
                          </Button>
                        </Col>
                        <Col xs={6} className="pl-1">
                          <a
                            className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                            href="/"
                          >
                            Olvide mi Contraseña
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
