import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Home, Profile, Portfolio, Contact } from "pages";
import "style.css";
import Header from "component/header";

function App() {
  return (
    <div className="main">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
