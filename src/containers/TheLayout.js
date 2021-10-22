import React from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticate } from "src/Auth";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  return (
    <div>
      {isAuthenticate() ? (
        <div className="c-app c-default-layout">
          <TheSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body">
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}{" "}
    </div>
  );
};

export default TheLayout;
