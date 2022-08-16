import React, { useState, useCallback, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import {connector} from '@src/services';
import { ProductPendingList } from './products/ProductPendingList';

const productService = connector('product');
export const HomeModule = () => {
    const [products, setProducts] = useState([]);
    const productsPending = useCallback(async ()=> {
        const productsResponse = await productService.get('/prices-pending');
        setProducts(productsResponse);
    }, [setProducts])

    useEffect(()=> {
        productsPending();
    }, [productsPending])
    return <>
    <Row>
        <Col xl={6}>
            <ProductPendingList products={products}/>
        </Col>
    </Row>
    </>;
}