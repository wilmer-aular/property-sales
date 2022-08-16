import React from 'react';
import { Card, ListPagination } from '@src/components';
import { columnsProducts } from './product.util';

export const ProductPendingList = ({products}) => {
    return <>
        <Card headersProps={{title: "Productos pendientes"}}>
            <ListPagination 
                columns={columnsProducts} 
                list={products ?? []} 
            />
        </Card>
    </>;
}