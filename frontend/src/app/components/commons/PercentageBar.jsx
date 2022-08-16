import React from 'react';

const PercentageBar = ({variant = 'success', percentage = 0}) => {
    return (
        <>
        <div className="progress mb-5" style={{height: 8}}>
            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${variant}`} 
            role="progressbar" 
            style={{width: percentage + '%'}}></div>
        </div>
        <span className="font-w700">{percentage}%</span>
        </>
    )
};

export default PercentageBar;