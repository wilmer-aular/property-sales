import React, { useState } from "react";
import { CardTabs } from "@src/components";
import { WorkersSearch } from "./WorkorsSearch";
import { WorkersTable } from "./WorkersTable";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { connector } from "@src/services";
import ModalWorker from "./modal/ModalWorker";

const { update, create } = connector("worker");

export const PropertiesModule = ({ list, handleFilters, filtered }) => {
  const { handleNotify } = useNotifyContent();
  const [show, setShow] = useState(false);
  const [worker, setWorker] = useState({});
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setWorker({});
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
      handleNotify("error", "Ocurrio un Error");
    } finally {
      handleFilters(null);
    }
  };

  const handleDetail = (id) => {
    const worker = list.find((i) => i.id === id);
    setWorker({ ...worker });
    handleShow(true);
  };

  const handleSearch = (filters) => {
    handleFilters(filters);
  };
  const propsModal = { show, worker, handleShow, handleClose, onSave };

  const tools = (
    <>
      {" "}
      <ModalWorker {...propsModal} />
    </>
  );

  return (
    <>
      <WorkersSearch handleSearch={handleSearch} filtered={filtered} />
      <CardTabs
        header="Lista de trabajadores"
        subHeader={`Cantidad de trabajadores: (${list.length})`}
        classHeader="card-header border-0"
        className="text-muted font-weight-bold font-size-sm"
        tools={tools}
      >
        <WorkersTable
          workers={list}
          handleDetail={handleDetail}
          refresh={handleFilters}
        />
      </CardTabs>
    </>
  );
};
