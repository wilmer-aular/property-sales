import React from "react";
import {  ModalSave } from "@src/components";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import {listType} from "../properties/util"

const ModalFilters = ({ show, handleShow, handleClose, handleSearch, filters, setFilters }) => {
  const propsModal = { show, handleShow, handleClose };

  const handleRegister = (type, e) => {
    let filter = e.target.value ? { [type]: e.target.value } : {};
    if (e.target.value === "") delete filters[type];
    setFilters({ ...filters, ...filter });
  };

  const search = () => {
    handleClose();
    handleSearch(filters);
  }
  
  return (
    <>
      <ModalSave
        onSave={()=> search()}
        size="lg"
        iconHeader="sync"
        title="Property information"
        variant="primary"
        deleteText="Close"
        variantDelete="danger"
        titleButton="advanced filters"
        saveText="Apply filters"
        variantButtom="default"
        classButtom={"btn-hover-primary btn-primary btn-sm"}
        {...propsModal}
      >
        <>
        <Form>
          <Row>
            <Col xl={6}>
              <label className="mt-2">Type of property</label>
              <InputGroup className="mb-3">
                <Form.Control
                  as="select"
                  onChange={(e) => handleRegister( 'type', e)}
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
              <label className="mt-2">Price from</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  onChange={(e) => handleRegister("price", e)}
                  defaultValue={filters?.priceFrom ?? ""}
                  placeholder="Price"
                />
              </InputGroup>
            </Col>
            <Col xl={3}>
              <label className="mt-2">price up</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  onChange={(e) => handleRegister("price", e)}
                  defaultValue={filters?.priceUp ?? ""}
                  placeholder="Price"
                />
              </InputGroup>
            </Col>
            <Col xl={6}>
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
            <Col xl={6}>
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
            <Col xl={12}>
              <label className="mt-2">Adress</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  onChange={(e) => handleRegister("address", e)}
                  value={filters?.city ?? ""}
                  placeholder="Adress"
                />
              </InputGroup>
            </Col>
           
            <Col xl={6}>
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
            <Col xl={6}>
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
      </ModalSave>
    </>
  );
};
export default ModalFilters;
