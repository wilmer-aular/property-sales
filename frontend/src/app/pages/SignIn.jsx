import React from "react";
import { GeneriRegister, Button } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from "react-bootstrap";
import { login } from "@src/services/auth.service";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { required, emailFormat } from "@src/helpers/forms-helper";
import { setUser } from "@src/services";

export const SignIn = () => {
  const { handleNotify } = useNotifyContent();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = async (value) => {
    try {
      const user = await login(value);
      if(user?.message){
        handleNotify(user?.message, "warn");
        const reset = user.message === 'Invalid password' ? 'password' : 'email';
        setValue(reset, '');
        return;
      }
      setUser(user);
      if(user?.token) {
        window.location.href = `/properties`;
      }
      
      handleNotify();
    } catch (err) {
      console.error(err);
      handleNotify("Task Error", "error");
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
              <h1 className="h3 fw-bold mt-5 mb-2">Get into</h1>
              <h2 className="h5 fw-medium text-muted mb-0">
              Please, add your details...
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
                        "Email address *",
                        null,
                        "email"
                      )}
                    </Col>
                    <Col xs={12}>
                      {GeneriRegister(
                        "password",
                        handleRegister("password", required),
                        errors.password,
                        "Password *",
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
                            onClick={handleSubmit(onSave)}
                          >
                             Login
                          </Button>
                        </Col>
                        <Col xs={12} >
                          <a
                            className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                            href="/"
                          >
                            See properties
                          </a>
                        </Col>
                        {/* <Col xs={6} >
                          <a
                            className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                            href="/register"
                          >
                            Register
                          </a>
                        </Col> */}
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
