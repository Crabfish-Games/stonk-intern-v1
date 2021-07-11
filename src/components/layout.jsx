import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default ({ children }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <i className="fas fa-chart-line"></i> Stonk Intern
          </NavLink>
        </div>
      </nav>
      <div className="container">{children}</div>
      <footer className="text-center text-muted m-4">
        <a href="https://www.twitter.com/crabfishgames" target="_blank">
          <i className="fab fa-twitter"></i> @crabfishgames
        </a>{" "}
        - 2021
      </footer>
    </Fragment>
  );
};
