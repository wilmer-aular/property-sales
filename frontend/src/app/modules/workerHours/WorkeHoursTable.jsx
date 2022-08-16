import React from "react";
import moment from "moment";
import { ListPagination, Delete } from "@src/components";
import { connector } from "@src/services";
import ModalWorkerHours from "./modal/ModalWorkerHours";

const { remove } = connector("workerhour");

const toHoursMap = (i) => {
  return {
    ...i,
    updateDate: moment(new Date(i.createdAt)).format("yyyy-MM-DD"),
    actions: {
      id: i.id,
      name: i.worker,
    },
  };
};

export const WorkerHoursTable = ({ workerHours, refresh }) => {
  const onDelete = (id) => {
    remove(id).then((data) => {
      refresh(null);
    });
  };
  const props = { workerHours, refresh };
  const ActionColum = (cell) => (
    <>
      <ModalWorkerHours id={cell.id} {...props} />
      <Delete
        icon="trash"
        title={`¿Eliminar dia de trabajo del trabajador ${cell.name}?`}
        className="btn btn-sm btn-default btn-text-primary btn-hover-danger btn-icon mr-0"
        onRemove={() => onDelete(cell.id)}
      />
    </>
  );
  const columnsHours = [
    {
      dataField: "workerDni",
      text: "DNI",
    },
    {
      dataField: "worker",
      text: "TRABAJADOR",
    },
    {
      dataField: "typeWorker",
      text: "TYPO DE TRABAJADOR",
    },
    {
      dataField: "initHourMorning",
      text: "INICIO / MAÑANA",
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "endHourMorning",
      text: "FINALIZADO / MAÑANA",
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "initHourAfternoon",
      text: "INICIO / TARDE",
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "endHourAfternoon",
      text: "FINALIZADO / TARDE",
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "updateDate",
      text: "FECHA",
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
        columns={columnsHours}
        list={workerHours?.map(toHoursMap) ?? []}
      />
    </>
  );
};
