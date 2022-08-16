import React from "react";

const Main = ({ children }) => (
  <>
    <main id="main-container">
      <div className="content">{children}</div>
    </main>
  </>
);
export default Main;
