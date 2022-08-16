import React, { useState, useEffect, useCallback } from "react";
import { WorkerHoursModule } from "../modules/workerHours";
import moment from "moment";
import { connector } from "@src/services";
import { useNotifyContent } from "@src/providers/NotifyProvider";

const { filter } = connector("workerhour");
const { all } = connector("worker");

export const WorkerHours = () => {
  const { handleNotify } = useNotifyContent();
  const [list, setList] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [filtered, setFiltered] = useState({});

  const getList = useCallback(
    async (filters = null) => {
      const today = moment().format("yyyy-MM-DD");
      try {
        if (filters) {
          const promise = await filter(filters);
          setList(promise);
          return;
        }
        const [workersHours, workers] = await Promise.all([
          filter({ date: today }),
          all(),
        ]);
        setWorkers(workers);
        setList(workersHours);
      } catch (err) {
        console.error(err);
        handleNotify("error", "Ocurrio un error");
      }
    },
    [setList, handleNotify]
  );

  useEffect(() => {
    getList();
  }, [getList]);

  const handleFilters = (filter) => {
    setFiltered(filter);
    getList(filter);
  };

  const props = { list, handleFilters, workers, filtered };

  return <WorkerHoursModule {...props} />;
};
