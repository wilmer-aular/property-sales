import React from 'react';
import { Card, Switch } from '@src/components';
import { Button, Row, Col } from 'react-bootstrap';

export const EnableCrons = ({config, onSave, handleCheck}) => {
   
    const tools = <>
        <Button className="btn-alt-primary min-width-125" onClick={()=> onSave(config)}>
            <i className="si si-check"></i> Guardar
        </Button>
    </>;
   
    return <>
    <Card headersProps={{title: "Sincronizar"}} tools={tools}>
        <p>Activar o desactivar condición para sincronizar.</p>
        <Row className="mt-3">
            <Col xl={1} xs={6}>
                <label>Stock</label>
            </Col>
            <Col xl={11}>
                <Switch checked={config?.sync?.stock} handleCheck={(e) => handleCheck(e, 'stock')}/>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xl={1} xs={6}>
                <label>Precio</label>
            </Col>
            <Col xl={11}>
                <Switch checked={config?.sync?.price} handleCheck={(e) => handleCheck(e, 'price')}/>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xl={1} xs={6}>
                <label>Venta</label>
            </Col>
            <Col xl={11}>
                <Switch checked={config?.sync?.order} handleCheck={(e) => handleCheck(e, 'order')}/>
            </Col>
        </Row>
    </Card>
    </>;
}
