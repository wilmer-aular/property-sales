import React from "react";
import { Form } from "react-bootstrap";
import { Card } from "@src/components";
import {Filters} from "../generic/Filters"

export const PropertiesSearch = ({ handleSearch, filtered }) => {
  return (
    <>
      <Card>
        <Form>
          <Filters handleSearch={handleSearch} filtered={filtered}/>
        </Form>
      </Card>
    </>
  );
};
