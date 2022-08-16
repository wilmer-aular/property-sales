import React, { useState, useEffect } from "react";
import moment from "moment";
import { CardTabs } from "@src/components";
import { WorkerHoursSearch } from "./WorkorHoursSearch";
import { WorkerHoursTable } from "./WorkeHoursTable";

export const WorkerHoursModule = ({ list, handleFilters, workers }) => {
  const [date, setDate] = useState("");

  const handleDate = (date) => {
    setDate(date);
    handleFilters({ date });
  };
  const handleSearch = (filters) => {
    handleFilters(filters);
  };

  useEffect(() => {
    const today = moment().format("yyyy-MM-DD");
    setDate(today);
  }, [setDate]);
  return (
    <>
      <WorkerHoursSearch
        date={date}
        setDate={handleDate}
        handleSearch={handleSearch}
        workers={workers}
      />
      <CardTabs
        header="Lista de Horas"
        subHeader={`Cantidad: (${list.length})`}
        subHeaderTwo={`fecha: (${date})`}
        classHeader="card-header border-0 "
        className="text-muted font-weight-bold font-size-sm"
      >
        <WorkerHoursTable workerHours={list} refresh={handleFilters} />
      </CardTabs>
    </>
  );
};
