import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import {listType} from "../util"
import ModalFilters from "./ModalFilters"

export const Filters = ({ handleSearch, filtered }) => {
  const [filters, setFilters] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => { setShow(false) };

  const handleRegister = (type, e) => {
    let filter = e.target.value ? { [type]: e.target.value } : {};
    if (e.target.value === "") delete filters[type];
    setFilters({ ...filters, ...filter });
  };

  const filterForType = (filter) => {
    const newFilter = { ...filters, ...filter }
    setFilters({...newFilter});
    handleSearch(newFilter)
  }

  const reset = () => {
    setFilters({});
    handleSearch(null);
  };
  const propsModal = { show, handleShow, handleClose, handleSearch, filters, setFilters};

  useEffect(() => {}, [filters, filtered]);
  return (
    <>
        <Row style={{marginBottom : "50px"}}>
          <Col xl={3}>
              <label className="mt-2">Type of property</label>
              <InputGroup className="mb-3">
                <Form.Control
                  as="select"
                  onChange={(e) => filterForType({ type: e.target.value })}
                  value={filters?.type ?? ""}
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
                  value={filters?.country ?? ""}
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
                  value={filters?.city ?? ""}
                  placeholder="City"
                />
              </InputGroup>
            </Col>
            <Col xl={3} style={{marginTop: "16px", textAlign: "center"}} >
              <span title="Apply filters" className="btn btn-sm btn-default btn-text-success btn-hover-warning btn-icon mr-2" 
              onClick={() => handleSearch(filters)}
              >
                <i className="fa fa-search  text-muted mx-2 cursor-pointer" style={{display: 'contents', cursor: 'pointer'}}></i> 
              </span>
              <span onClick={() => reset()} title="Reset filters" className="btn btn-sm btn-default btn-text-success btn-hover-warning btn-icon mr-2" >
                <i className="fa fa-redo text-muted mx-2 cursor-pointer" style={{display: 'contents', cursor: 'pointer'}}></i> 
              </span>
              <ModalFilters {...propsModal}/>
            </Col>
          </Row>
    </>
  );
};
