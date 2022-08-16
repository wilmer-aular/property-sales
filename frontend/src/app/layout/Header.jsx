import React from "react";
import { useLayoutContent } from "../providers/LayoutProvider";

const Header = () => {
  const { showMenu, setShowMenu } = useLayoutContent();
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
            <button type="button" className="btn btn-dual-secondary">
              <i className="fa fa-search"></i>{" "}
              <span className="ml-10">Buscar</span>
            </button>
          </div>
          <div className="content-header-section">
            <button className="btn btn-rounded btn-dual-secondary">
              <i className="fa fa-user d-sm-none"></i>
              Inquieta
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
