import React from "react";
import { GeneriRegister, Button } from "@src/components";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from "react-bootstrap";
import { signUp } from "@src/services/auth.service";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { required, emailFormat } from "@src/helpers/forms-helper";
import { setUser } from "@src/services";

export const SignUp = () => {
  const { handleNotify } = useNotifyContent();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = async (value) => {
    const { password, confirmpassword } = value;
    if (password !== confirmpassword) {
      handleNotify("passwords do not match", "warn");
      setValue("password", "");
      setValue("confirmpassword", "");
      return;
    }

    delete value.confirmpassword;
    try {
       const user = await signUp(value);
      setUser(user);
      window.location.href = `/properties/${user._id}`;
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
        <div className="bg-gd-emerald">
          <div className="hero-static content content-full bg-body-extra-light">
            <div className="py-4 px-1 text-center mb-4">
              <h1 className="h3 fw-bold mt-5 mb-2">Create new user</h1>
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
                        "userName",
                        handleRegister("userName", required),
                        errors.userName,
                        "Username *",
                        null,
                        "text"
                      )}
                    </Col>
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
                        "Password * ",
                        null,
                        "password"
                      )}
                    </Col>
                    <Col xs={12}>
                      {GeneriRegister(
                        "confirmpassword",
                        handleRegister("confirmpassword", required),
                        errors.confirmpassword,
                        "Confirm Password * ",
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
                            To subscribe
                          </Button>
                        </Col>
                        <Col xs={6} >
                          <a
                            className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                            href="/"
                          >
                            See properties
                          </a>
                        </Col>
                        <Col xs={6}>
                          <a
                            className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                            href="/auth"
                          >
                            Login
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
