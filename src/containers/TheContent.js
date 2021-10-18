import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import { useLocation } from "react-router-dom";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const TheContent = () => {
  const location = useLocation();
  // const value = location.username;
  // if (location.pathname == "/") {
  // user = location.username;
  // console.log(location.username);
  // }

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) =>
                    true ? ( // admin test
                      <route.component {...props} />
                    ) : (
                      <Redirect to={{ pathname: "/login" }} />
                    )
                  }
                />
              ) : null;
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
