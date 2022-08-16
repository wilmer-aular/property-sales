import React, { useCallback, useEffect, useState } from "react";
import { WorkersModule } from "../modules/workers";
import { connector } from "@src/services";
import { useNotifyContent } from "@src/providers/NotifyProvider";

const { all, filter } = connector("worker");

export const Workers = () => {
  const { handleNotify } = useNotifyContent();
  const [filtered, setFiltered] = useState({});
  const [list, setList] = useState([]);

  const getList = useCallback(
    async (filters = null) => {
      const promise = filters ? filter(filters) : all();
      try {
        const workers = await promise;
        setList(workers);
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

  const handleFilters = (filter = null) => {
    setFiltered(filter);
    getList(filter);
  };

  const props = { list, handleFilters, filtered };

  return <WorkersModule {...props} />;
};
