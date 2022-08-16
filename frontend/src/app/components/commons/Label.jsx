import React from 'react';

const Label = ({children, variant= 'default', icon}) => {
    const iconClass = icon ? 'fa fa-' + icon : '';
    return (
        <span className={ `badge badge-${variant} mr-5 my-5 px-3 py-1`}>
            {icon && (<i className={`${iconClass} mr-5`} ></i>)} {children}
        </span>
    );
};

export default Label;