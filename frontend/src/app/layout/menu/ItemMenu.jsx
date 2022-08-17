import React from 'react';
import { useLocation } from "react-router";
import { checkIsActive } from '../../helpers/RouterHelpers';
import { Link } from "react-router-dom";
import { useLayoutContent } from "../../providers/LayoutProvider";

const ItemMenu = ({item}) => {
    const { setShowMenu } = useLayoutContent();
    const location = useLocation();
    const activeClass = (url) => checkIsActive(location, url)?'active': '';
    return (
    <div onClick={()=> setShowMenu(false)}>
        <Link to={item.url} className={activeClass(item.url)} >
            <i className={item.icon}></i>
            <span className="sidebar-mini-hide">{item.label}</span>
        </Link>
    </div>
    );
};

export default ItemMenu;
