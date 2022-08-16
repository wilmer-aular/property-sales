import React from "react";

const Main = ({ children }) => (
  <>
    <main id="main-container">
      <div className="bg-body-light border-b">
        <div className="content py-5 text-center">
          <nav className="breadcrumb bg-body-light mb-0">
            <a className="breadcrumb-item" href="/inicio">
              <i className="si si-home"></i> Home
            </a>
          </nav>
        </div>
      </div>
      <div className="content">{children}</div>
    </main>
  </>
);
export default Main;
