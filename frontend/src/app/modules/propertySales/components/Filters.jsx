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
          <Row style={{marginBottom : "50px"}}>
          <Col xl={3}>
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
            <Col xl={3}>
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
            <Col xl={2} style={{marginTop: "16px"}}>
              <span title="Apply filters" className=" btn-text-dark btn-hover-warning btn-icon mr-2" >
                <i className="fa fa-search  text-muted mx-2 cursor-pointer" style={{display: 'contents', cursor: 'pointer'}}></i> 
              </span>
              <span onClick={() => reset()} title="Reset filters" className=" btn-text-dark btn-hover-warning btn-icon ml-5 mr-5" >
                <i className="fa fa-redo text-muted mx-2 cursor-pointer" style={{display: 'contents', cursor: 'pointer'}}></i> 
              </span>
              <span onClick={() => reset()} title="Reset filters" className=" btn-text-dark btn-hover-warning btn-icon" >
                <i className="fa fa-filter text-muted mx-2 cursor-pointer" style={{display: 'contents', cursor: 'pointer'}}></i> 
              </span>
            </Col>
          </Row>
    </>
  );
};
