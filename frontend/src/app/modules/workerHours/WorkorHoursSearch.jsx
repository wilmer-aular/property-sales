import React, { useEffect, useState, useMemo } from "react";
import moment from "moment";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { Card, TypeCompoSelect } from "@src/components";

const toDate = (date) => moment(date).format("yyyy-MM-DD");

export const WorkerHoursSearch = ({ date, setDate, handleSearch, workers }) => {
  const [filters, setFilters] = useState({});

  const reset = () => {
    const today = moment().format("yyyy-MM-DD");
    setDate(today);
    setFilters({ date: today });
    handleSearch(null);
  };

  const handleWorker = (value) => {
    let filter = { workerId: value.value };
    setFilters({ ...filters, ...filter });
    handleSearch(filter);
  };

  const WorkersNames = useMemo(() => {
    return workers?.map((i) => {
      return {
        value: i.id,
        label: `${i.name} ${i.lastName}`,
        isFixed: true,
      };
    });
  }, [workers]);

  const errors = { workerId: false };

  useEffect(() => {
    setFilters({ date });
  }, [date, setFilters]);
  return (
    <>
      <Card>
        <Form>
          <Row>
            <Col xl={3}>
              <label className="mt-2">Fecha</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="date"
                  onChange={(e) => setDate(toDate(e.target.value))}
                  defaultValue={filters.date}
                />
              </InputGroup>
            </Col>
            <Col xl={3}>
              {TypeCompoSelect(
                WorkersNames,
                "workerId",
                errors.workerId,
                handleWorker,
                "Trabajador"
              )}
            </Col>
            <Col xl={6}>
              {/* <Button variant="info" onClick={() => handleSearch(filters)}>
                <i className="fa fa-search"></i> Buscar
              </Button> */}
              <Button
                variant="info"
                className="ml-3"
                onClick={() => setDate(toDate(new Date()))}
              >
                <i className="fa fa-calendar"></i> Hoy
              </Button>
              <Button
                variant="info"
                className="ml-3"
                onClick={() =>
                  setDate(toDate(moment().subtract(1, "days").toDate()))
                }
              >
                <i className="fa fa-arrow-left"></i> Ayer
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
