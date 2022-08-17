import React from "react";

import { ListPagination, Button, Delete } from "@src/components";
import { connector } from "@src/services";
import { toPropertyMap } from "./util";

const { remove } = connector("property");

export const PropertiesTable = ({ properties, handleDetail, refresh }) => {

  const onDelete = async (id) => {
   await remove(id)
      refresh({});
    return {success: true};
  };

  const ActionColum = (cell) => (
    <>
      <Button
        title="Editar?"
        className="btn btn-default  btn-hover-primary btn-primary mr-2 btn-sm"
        onClick={() => {
          handleDetail(cell.id);
        }}
      >
        Editar
      </Button>
      <Delete
        icon="trash"
        title="¿Delete property?"
        className="btn btn-sm btn-default btn-text-primary btn-hover-danger btn-icon mr-0"
        onRemove={() => onDelete(cell.id)}
      />
    </>
  );
  const columnsProducts = [
    {
      dataField: "type",
      text: "TYPE",
    },
    {
      dataField: "country",
      text: "COUNTY",
    },
    {
      dataField: "city",
      text: "CITY",
    },
    {
      dataField: "price",
      text: "PRICE",
    },
    {
      dataField: "numberOfRooms",
      text: "NUMBER OF ROOMS",
    },
    {
      dataField: "numberOfBathrooms",
      text: "NUMBER OF BATHROOMS",
    },
    {
      dataField: "viewDate",
      text: "DATE",
    },
    {
      dataField: "actions",
      text: "OPCIONES",
      formatter: ActionColum,
    },
  ];

  return (
    <>
      <ListPagination
        columns={columnsProducts}
        list={properties?.map(toPropertyMap) ?? []}
      />
    </>
  );
};
