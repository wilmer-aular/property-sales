import React from 'react';
import ItemsMenu from './ItemsMenu';
import { useLayoutContent } from '../../providers/LayoutProvider';

const Menu = () => {
  const { setShowMenu } = useLayoutContent();
  return (
    <>
      <nav id="sidebar">
        <div className="sidebar-content">
          <div className="content-header content-header-fullrow px-15">
            <div className="content-header-section sidebar-mini-visible-b">
              <span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                <span className="text-dual-primary-dark">S</span>
                <span className="text-primary">C</span>
              </span>
            </div>
            <div className="content-header-section text-center align-parent sidebar-mini-hidden">
              <button
                type="button"
                className="btn btn-circle btn-dual-secondary d-lg-none align-v-r"
                data-toggle="layout"
                data-action="sidebar_close"
                onClick={() => setShowMenu(false)}
              >
                <i className="fa fa-times text-danger"></i>
              </button>
              <div className="content-header-item">
                <a className="link-effect font-w700" href="/">
                  <span className="font-size-xl text-dual-primary-dark">
                    Sys
                  </span>
                  <span className="font-size-xl text-primary">Worker</span>
                </a>
              </div>
            </div>
          </div>
          {/* <UserMenuCard /> */}
          <ItemsMenu />
        </div>
      </nav>
    </>
  );
};

export default Menu;
