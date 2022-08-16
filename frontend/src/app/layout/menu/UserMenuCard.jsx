import React from 'react';

const UserMenuCard = () => {
  return (
    <>
      <div className="content-side content-side-full content-side-user px-10 align-parent">
        <div className="sidebar-mini-visible-b align-v animated fadeIn">
          <img
            className="img-avatar img-avatar32"
            src="/theme/media/avatars/avatar15.jpg"
            alt=""
          />
        </div>
        <div className="sidebar-mini-hidden-b text-center">
          <a className="img-link" href="/user/profile">
            <img src="/media/logo.png" alt="" style={{ width: 140 }} />
          </a>
          <ul className="list-inline mt-10">
            {/* <li className="list-inline-item">
                        <a className="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase"
                         href="/user/profile">Wiljac Aular</a>
                    </li> */}
            <li className="list-inline-item">
              <span className="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase">
                Versión: 2.0.0
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserMenuCard;
