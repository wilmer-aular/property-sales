import React from "react";

import { ListPagination, Button, Delete, Columns } from "@src/components";
import { connector } from "@src/services";
import { toWorkersMap } from "./util";

const { remove } = connector("worker");

export const WorkersTable = ({ workers, handleDetail, refresh }) => {
  const onDelete = (id) => {
    remove(id).then((data) => {
      refresh(null);
    });
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
        title={`¿Eliminar el trabajador ${cell.name}?`}
        className="btn btn-sm btn-default btn-text-primary btn-hover-danger btn-icon mr-0"
        onRemove={() => onDelete(cell.id)}
      />
    </>
  );
  const columnsProducts = [
    {
      dataField: "dni",
      text: "DNI",
    },
    {
      dataField: "type",
      text: "TYPE",
    },
    {
      dataField: "name",
      text: "NOMBRE",
    },
    {
      dataField: "lastName",
      text: "APELLIDO",
    },
    {
      dataField: "dateOfBirth",
      text: "FECHA DE NACIMIENTO",
    },
    {
      dataField: "hourlyRate",
      text: "TARIFA POR HORA",
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "scheduleOne",
      text: "HORARIO",

      formatter: (cell) =>
        Columns.TitleAndSubTitleColumn(
          cell,
          "text-dark-75 text-hover-primary text-left"
        ),
    },
    {
      dataField: "scheduleTwo",
      text: "HORARIO",

      formatter: (cell) =>
        Columns.TitleAndSubTitleColumn(
          cell,
          "text-dark-75 text-hover-primary text-left"
        ),
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
        list={workers?.map(toWorkersMap) ?? []}
      />
    </>
  );
};
