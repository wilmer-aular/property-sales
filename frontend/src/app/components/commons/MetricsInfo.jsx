import React from 'react';
import { Card } from './';

export const MetricsInfo = ({title, value, icon, iconColor}) =>  {
    return <Card contentProps={{className: 'text-right'}}>
        <div className="float-left mt-10 d-none d-sm-block">
            <i className={`${icon} fa-3x text-${iconColor}`}></i>
        </div>
        <div className="font-size-h4 font-w600 js-count-to-enabled ng-binding" data-toggle="countTo" data-speed="1000" data-to="1500">{value}</div>
        <div className="font-size-sm font-w600 text-uppercase text-muted">{title}</div>                               
    </Card>
}