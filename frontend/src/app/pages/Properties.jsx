import React, { useCallback, useEffect, useState } from "react";
import { PropertiesModule } from "../modules/properties";
import { connector } from "@src/services";
import { useNotifyContent } from "@src/providers/NotifyProvider";

const { all, filter } = connector("property");

export const Properties = () => {
  const { handleNotify } = useNotifyContent();
  const [filtered, setFiltered] = useState({});
  const [list, setList] = useState([]);

  const getList = useCallback(
    async (filters = null) => {
      const promise = filters ? filter(filters) : all();
      try {
        const properties = await promise;
        setList(properties);
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

  return <PropertiesModule {...props} />;
};
