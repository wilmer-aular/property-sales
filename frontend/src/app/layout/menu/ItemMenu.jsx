import React from 'react';
import { useLocation } from "react-router";
import { checkIsActive } from '../../helpers/RouterHelpers';
import { Link } from "react-router-dom";


const ItemMenu = ({item}) => {
    const location = useLocation();
    const activeClass = (url) => checkIsActive(location, url)?'active': '';
    return (
    <li>
        <Link to={item.url} className={activeClass(item.url)} >
            <i className={item.icon}></i>
            <span className="sidebar-mini-hide">{item.label}</span>
        </Link>
    </li>
    );
};

export default ItemMenu;
