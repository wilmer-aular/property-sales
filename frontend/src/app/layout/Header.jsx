import React from "react";
import { useLayoutContent } from "../providers/LayoutProvider";
import { removeUser, getUser } from "@src/services";

const Header = () => {
  const { showMenu, setShowMenu } = useLayoutContent();
  const user = getUser();
 const signOut = () =>{
      removeUser();
      window.location.href = '/auth';
  }
  return (
    <>
      <header id="page-header">
        <div className="content-header">
          <div className="content-header-section">
            <button
              type="button"
              className="btn btn-circle btn-dual-secondary"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="fa fa-navicon"></i>
            </button>
          </div>
          <div className="content-header-section">
            <span className="mr-3">Hi {user.userName}</span>
            <button onClick={()=> signOut()} className="btn btn-rounded btn-dual-secondary">
              <i className="fa fa-user d-sm-none"></i>
              Sign Out
            </button>
          </div>
          {/* <div className="content-header-section">
          <a href="/" type="button" className="btn btn-primary">
                <i className="si si-home"></i> Principal
            </a>
            <a href="/pedidos" className="btn btn-warning">
                <i className="fa fa-book"></i> Pedidos
            </a>
            <a href="/insumos" className="btn btn-success">
                <i className="fa fa-book"></i> Materia prima
            </a>
            <a href="/talleres" className="btn btn-info">
                <i className="fa fa-industry"></i> Talleres
            </a>
        </div> */}
        </div>
      </header>
    </>
  );
};
export default Header;
