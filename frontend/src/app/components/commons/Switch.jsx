import React, {useState, useEffect} from 'react';

export const Switch = ({checked, handleCheck}) => {
    const [isChecked, setIsChecked] = useState(checked);
   
    const onChange = (e) => {
        setIsChecked(e.target.checked)
        handleCheck(e.target.checked)
    }
    useEffect(() => {
        setIsChecked(checked)
    }, [checked, setIsChecked]);
    return <>
    <label className="css-control css-control-success css-switch">
        <input 
            type="checkbox" 
            className="css-control-input ng-pristine ng-untouched ng-valid ng-not-empty" 
            checked={isChecked ?? false}
            onChange={onChange}
        />
        <span className="css-control-indicator"></span>
    </label>
    </>;
}