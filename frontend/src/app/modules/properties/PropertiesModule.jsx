import React, { useState } from "react";
import { CardTabs } from "@src/components";
import { PropertiesSearch } from "./PropertiesSearch";
import { PropertiesTable } from "./PropertiesTable";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { connector } from "@src/services";
import ModalProperty from "./modal/ModalProperty";

const { update, create } = connector("property");

export const PropertiesModule = ({ list, handleFilters, filtered }) => {
  const { handleNotify } = useNotifyContent();
  const [show, setShow] = useState(false);
  const [property, setProperty] = useState({});
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setProperty({});
  };
  const onSave = async (value) => {
    const { id } = value;
    const promise = id ? update(id, value) : create(value);
    try {
      await promise;
      handleNotify();
      handleClose();
      return { success: true };
    } catch (err) {
      console.error(err);
      handleNotify("error", "Task dailed");
    } finally {
      handleFilters(null);
    }
  };

  const handleDetail = (id) => {
    const property = list.find((i) => i._id === id);
    setProperty({ ...property });
    handleShow(true);
  };

  const handleSearch = (filters) => {
    handleFilters(filters);
  };
  const propsModal = { show, property, handleShow, handleClose, onSave };

  const tools = (
    <>
      {" "}
      <ModalProperty {...propsModal} />
    </>
  );

  return (
    <>
      <PropertiesSearch handleSearch={handleSearch} filtered={filtered} />
      <CardTabs
        header="Property list"
        subHeader={`Number of properties: (${list.length})`}
        classHeader="card-header border-0"
        className="text-muted font-weight-bold font-size-sm"
        tools={tools}
      >
        <PropertiesTable
          properties={list}
          handleDetail={handleDetail}
          refresh={handleFilters}
        />
      </CardTabs>
    </>
  );
};
