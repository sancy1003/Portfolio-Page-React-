import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Profile, Portfolio, Blog } from "pages";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "style.css";
import Header from "component/header";

function App() {
  return (
    <div className="main">
      <Header />
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup className="container">
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="page-change"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Profile" component={Profile} />
                  <Route exact path="/Portfolio" component={Portfolio} />
                  <Route exact path="/Blog" component={Blog} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </div>
  );
}

export default App;
