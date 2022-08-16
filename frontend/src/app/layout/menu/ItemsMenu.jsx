import React from 'react';
import ItemMenu from './ItemMenu';
import { mainMenu } from '@src/configuration';

const ItemsMenu = () => {
    return (<>
    <div className="content-side content-side-full">
      <ul className="nav-main">
        {mainMenu.map(item => (<ItemMenu key={item.url} item={item} />))}
      </ul>
    </div>
    </>);
};

export default ItemsMenu;
