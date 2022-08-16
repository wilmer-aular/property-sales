import React from 'react';
import * as moment from 'moment';
import { Label } from '../';

export const DateAnTime = (cell) => (
    <>
        <div>
            <span className="font-w700">
                {moment(cell).format('yyyy-MM-DD')}
            </span>
        </div>
        <div>
            <span className="text-muted">
                {moment(cell).format('hh:mm:ss a')}
            </span>
        </div>
    </>
);

export const LabelColumn = (cell, variant = 'info') => (
    <Label variant={variant} >{cell}</Label>
);