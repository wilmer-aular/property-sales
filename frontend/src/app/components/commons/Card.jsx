import React from 'react';

const Card = ({ children, headersProps, contentProps, classes, tools }) => {
    return (
        <div className={`block block-themed ${classes ?? ''}`}>
            {headersProps && (
                <div className={`block-header ${headersProps.bg ? 'bg-' + headersProps.bg : ''} ${headersProps.className ?? ''}`}>
                    <h3 className="block-title">{ headersProps.title }</h3>
                    {tools && (
                        <div className="block-options">
                            {tools}
                        </div>
                    )}
                </div>
            ) }
            
            <div className={
                `block-content pb-3  ${contentProps?.className ?? ''} `
            }>
                { children }
            </div>
        </div>
    );
};

export default Card;
