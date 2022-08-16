import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { Card } from "@src/components";

export const WorkersSearch = ({ handleSearch, filtered }) => {
  const [filters, setFilters] = useState({});

  const handleRegister = (type, e) => {
    let filter = e.target.value ? { [type]: e.target.value } : {};

    if (e.target.value === "") delete filters[type];

    setFilters({ ...filters, ...filter });
  };

  const reset = () => {
    setFilters({});
    handleSearch(null);
  };
  useEffect(() => {}, [filters, filtered]);

  const list = [
    { key: "Oficina", value: "Oficina" },
    { key: "Operador", value: "Operador" },
  ];

  return (
    <>
      <Card>
        <Form>
          <Row>
            <Col xl={3}>
              <label className="mt-2">Nombre</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  onChange={(e) => handleRegister("name", e)}
                  defaultValue={filters.name ?? ""}
                  placeholder="Name"
                />
              </InputGroup>
            </Col>
            <Col xl={3}>
              <label className="mt-2">Tipo de TRabajador</label>
              <InputGroup className="mb-3">
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    handleSearch({ type: e.target.value });
                  }}
                  defaultValue={filters.type ?? ""}
                >
                  <option key={""}></option>
                  {list?.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.key}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </Col>

            <Col xl={3}>
              <Button variant="info" onClick={() => handleSearch(filters)}>
                <i className="fa fa-search"></i> Buscar
              </Button>
              <Button
                variant="info"
                className="ml-3"
                onClick={() => reset(null)}
              >
                <i className="fa fa-redo"></i> Resetear
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};
