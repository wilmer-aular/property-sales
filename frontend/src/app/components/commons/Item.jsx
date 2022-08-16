import React from 'react';

const Item = ({label, value, icon}) => {
    return (
        <div className="mb-1">
            <span className="font-w700">
                {icon && (<i className={`${icon} mr-5`}></i>)} {label}: 
            </span>
            <span>
                {' ' + value}
            </span>
        </div>
    );
};

export default Item;