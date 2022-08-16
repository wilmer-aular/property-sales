import React, { useState, useEffect } from 'react';
import {Button, Form, Row, Col } from 'react-bootstrap';

import { Card } from '@src/components';

export const ViewLogs = ({ config, onSave }) => {
    const [viewLogs, setViewLogs] = useState(config?.viewLogs);
    const save = () => {
        config.viewLogs = viewLogs;
        onSave(config);
    }
    useEffect(() => {
        setViewLogs(config?.viewLogs)
    }, [config, setViewLogs]);
    const tools = <>
        <Button className="btn-alt-primary min-width-125" onClick={save}>
            <i className="si si-check"></i> Guardar
        </Button>
    </>;
    
    return <>
    <Card headersProps={{title: "Ver Logs"}} tools={tools}>
        <p>Ver logs.</p>
        <Row className="mt-3">
            <Col xl={2} xs={6}>
                <label>Cantidad de logs:</label>
            </Col>
            <Col xl={3} xs={6}>
                <Form.Control type="number" value={viewLogs ?? 0} onChange={(e) => setViewLogs(e.target.value)}/>
            </Col>
        </Row>
    </Card>
    </>;
}
