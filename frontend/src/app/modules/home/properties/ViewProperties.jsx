import React from 'react';
import { Card, ListPagination } from '@src/components';
import { columnsProperty } from './properties.util';

export const ViewProperties = ({properties}) => {
    return <>
        <Card headersProps={{title: "Property estimation"}}>
            <ListPagination 
                columns={columnsProperty} 
                list={properties ?? []} 
            />
        </Card>
    </>;
}