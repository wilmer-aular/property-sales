import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import {listType} from "../../properties/util"

export const Filters = ({ handleSearch, filtered }) => {
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
  return (
    <>
        <Form>
          <Row>
          <Col xl={2}>
              <label className="mt-2">Type of property</label>
              <InputGroup className="mb-3">
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    handleSearch({ type: e.target.value });
                  }}
                  defaultValue={filters?.type ?? ""}
                >
                  <option key={""}></option>
                  {listType?.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.key}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </Col>
            <Col xl={2}>
              <label className="mt-2">Country</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  onChange={(e) => handleRegister("country", e)}
                  defaultValue={filters?.country ?? ""}
                  placeholder="Country"
                />
              </InputGroup>
            </Col>
            <Col xl={2}>
              <label className="mt-2">City</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  onChange={(e) => handleRegister("city", e)}
                  defaultValue={filters?.city ?? ""}
                  placeholder="City"
                />
              </InputGroup>
            </Col>
            <Col xl={2}>
              <label className="mt-2">Price</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  onChange={(e) => handleRegister("price", e)}
                  defaultValue={filters?.price ?? ""}
                  placeholder="Price"
                />
              </InputGroup>
            </Col>
            <Col xl={2}>
              <label className="mt-2">N° Bedrooms</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  onChange={(e) => handleRegister("numberOfRooms", e)}
                  defaultValue={filters?.numberOfBathrooms ?? ""}
                  placeholder="Bedrooms"
                />
              </InputGroup>
            </Col>
            <Col xl={2}>
              <label className="mt-2">N° Bathrooms</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  onChange={(e) => handleRegister("numberOfBathrooms", e)}
                  defaultValue={filters?.numberOfBathrooms ?? ""}
                  placeholder="Bathrooms"
                />
              </InputGroup>
            </Col>
            {/* <Col xl={3} style={{marginTop: "16px"}}>
              <Button variant="info" onClick={() => handleSearch(filters)}>
                <i className="fa fa-search"></i> Serach
              </Button>
                  <Button
                    variant="info"
                    className="ml-3"
                    onClick={() => reset()}
                  >
                    <i className="fa fa-redo"></i> Reset
                  </Button>
            </Col> */}
          </Row>
        </Form>
    </>
  );
};
