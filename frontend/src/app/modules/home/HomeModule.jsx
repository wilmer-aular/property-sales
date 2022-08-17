import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ViewProperties } from './ViewProperties';

export const HomeModule = ({list}) => {
 
    return <>
    <Row>
        <Col xl={6}>
            <ViewProperties properties={list}/>
        </Col>
    </Row>
    </>;
}