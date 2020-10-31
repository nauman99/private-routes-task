import React from "react";
import Shop from "./screens/Shop";
import Orders from "./screens/Orders";
import Account from "./screens/Account";
import PrivateRouter from "./components/privateRouter";
import Login from "./screens/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/login" exact component={Login} />
          <PrivateRouter path="/orders" component={Orders} />
          <PrivateRouter path="/account" component={Account} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
