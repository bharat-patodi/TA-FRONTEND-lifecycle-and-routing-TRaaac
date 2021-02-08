import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import User from "./User";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </header>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/users/:id" component={User} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
