import React from 'react';
import { Header, Main, Menu } from './';
import { useLayoutContent } from '../providers/LayoutProvider';

const Layout = ({ children }) => {
    const content = useLayoutContent();
    const showMenu = content.showMenu ? 'sidebar-o sidebar-o-xs' : '';
    return (<>
        <div id="page-container" className={`enable-page-overlay side-scroll main-content-narrow sidebar-inverse page-header-fixed ${showMenu}`}>
            <Menu/>
            <Header/>
            <Main>
                {children}
            </Main>
        </div>
    </>);
};

export { Layout };