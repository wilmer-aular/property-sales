import React from "react";
import { MetricsInfo } from "@src/components";
import { Row, Col } from "react-bootstrap";

export const WorkerHoursMetrics = ({ products, date }) => {
  const pending = products?.filter((p) => p.status === "PENDING")?.length;
  const ready = products?.filter((p) => p.status === "READY")?.length;
  const notFound = products?.filter((p) => p.status === "NOT_FOUND")?.length;
  return (
    <>
      <Row>
        <Col xl={3} xs={6}>
          <MetricsInfo
            title="Fecha"
            value={date}
            icon="far fa-circle"
            iconColor="warning"
          />
        </Col>
        <Col xl={3} xs={6}>
          <MetricsInfo
            title="Pendientes"
            value={pending}
            icon="far fa-circle"
            iconColor="warning"
          />
        </Col>
        <Col xl={3} xs={6}>
          <MetricsInfo
            title="Existen"
            value={ready}
            icon="fa fa-check"
            iconColor="success"
          />
        </Col>
        <Col xl={3} xs={6}>
          <MetricsInfo
            title="No Existen"
            value={notFound}
            icon="fa fa-times"
            iconColor="danger"
          />
        </Col>
      </Row>
    </>
  );
};
