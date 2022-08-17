import React, { useEffect, useMemo, useState, useCallback } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import { chunk } from "lodash";

const ListPagination = ({
  list = [],
  columns = [],
  perPage = 10,
  selectRows,
  classTable = "table table-head-custom table-head-bg table-borderless table-vertical-center",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [separated, setSeparated] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const viewButton = useMemo(() => {
    if (list.length > perPage) return true;
    return false;
  }, [list, perPage]);

  const initCallback = useCallback(() => {
    const separator = list ? chunk(list, perPage) : [];
    setCurrentPage(1);
    setSeparated(separator);
    setFiltered(separator[0]);
  }, [list, perPage, setCurrentPage, setSeparated, setFiltered]);

  const back = () => {
    const newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
    setFiltered(separated[newCurrentPage - 1]);
  };

  const next = () => {
    setCurrentPage(currentPage + 1);
    setFiltered(separated[currentPage]);
  };

  useEffect(() => {
    initCallback();
  }, [initCallback]);

  return (
    <>
    {!list.length ? (
      <div
        role="alert"
        className={`alert alert-warning py-1 text-center text-secondary mx-10 `}
      >
        No data to display
      </div>
      ) : (
      <>
          <BootstrapTable
        wrapperClasses="table-responsive"
        classes={classTable}
        bootstrap4
        bordered={false}
        keyField="id"
        loading={true}
        data={filtered ?? []}
        columns={columns}
        selectRow={selectRows}
      ></BootstrapTable>
      {viewButton && (
        <div className="card-toolbar text-center">
          <Button onClick={back} disabled={currentPage <= 1}></Button>
          <span className="mx-4">
            Page {currentPage} of {separated.length}{" "}
          </span>
          <Button
            onClick={next}
            disabled={currentPage >= separated.length}
          ></Button>
        </div>
      )}
      </>
      )}
    </>
  );
};

export default ListPagination;
