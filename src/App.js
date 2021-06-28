import React, { useState } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Discography from "./pages/discography";
import ScrollToTop from "./ScrollToTop";
import Confirmation from "./components/Confirmation";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/discography" component={Discography} />
        <Route path="/confirmation" component={Confirmation} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
