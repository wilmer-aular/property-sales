import React from 'react';

const FaIcon = ({icon, style = {}, className=''}) => {
    
    return (
        <i className={`fa fa-${icon} ${className}`} style={style}></i>
    );
};

export default FaIcon;