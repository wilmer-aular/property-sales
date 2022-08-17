import React, { useCallback, useEffect, useState } from "react";
import { PropertiesModule } from "../modules/properties";
import { connector } from "@src/services";
import { useNotifyContent } from "@src/providers/NotifyProvider";
import { useLocation } from "react-router-dom"

const { filter } = connector("property");

export const Properties = () => {
  const location = useLocation();
  const { handleNotify } = useNotifyContent();
  const [filtered, setFiltered] = useState({});
  const [list, setList] = useState([]);

  let userId = '';
  if(location?.pathname){
   const path = location.pathname.split('/');
    userId = path.pop();
  }

  const getList = useCallback(
    async (filters = {}) => {
          filters.userId = userId;
      try {
        const properties = await filter(filters);
        setList(properties);
      } catch (err) {
        console.error(err);
        handleNotify("error", "Ocurrio un error");
      }
    },
    [setList, handleNotify, userId]
  );


  useEffect(() => {
    getList();
  }, [getList]);

  const handleFilters = (filter = {}) => {
    setFiltered(filter);
    getList(filter);
  };

  const props = { list, handleFilters, filtered, userId };

  return <PropertiesModule {...props} />;
};
