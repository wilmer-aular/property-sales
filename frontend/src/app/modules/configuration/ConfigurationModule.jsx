import React, { useState, useCallback, useEffect } from "react";
import { ViewLogs } from "./components/ViewLogs";
import { EnableCrons } from "./components/EnableCrons";
import { connector } from "@src/services";

const configApi = connector("configuration");

export const ConfigurationModule = () => {
  const [config, setConfig] = useState();

  const find = useCallback(async () => {
    const data = await configApi.get("/");
    setConfig(data);
  }, [setConfig]);

  useEffect(() => {
    find();
  }, [find]);

  const saveSync = (configNew) => {
    setConfig(configNew);
    configApi.put("/", configNew).catch((error) => {
      console.error(error);
    });
  };

  const handleCheck = (checked, type) => {
    config.sync[type] = checked;
    setConfig(config);
  };
  return (
    <>
      <EnableCrons
        config={config}
        onSave={saveSync}
        handleCheck={handleCheck}
      />
      <ViewLogs config={config} onSave={saveSync} />
    </>
  );
};
