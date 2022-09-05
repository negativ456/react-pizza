import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../UI/Header";

const Main: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
