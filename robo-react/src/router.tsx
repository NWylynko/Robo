import React from "react";
import roboServer from './RoboServerConnect'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Client } from "./pages/utils/Client";
import { Loading } from "./pages/utils/Loading";
import { Wizard } from "./pages/utils/Wizard";
import { Controller } from "./pages/create/Controller";
import { Profile } from "./pages/create/Profile";
import { Robot } from "./pages/create/Robot";
import { Servo } from "./pages/create/Servo";

export default function App() {

  new roboServer('http://localhost:7777')

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/utils/client" component={Client} />
        <Route exact path="/utils/loading" component={Loading} />
        <Route exact path="/utils/Wizard" component={Wizard} />
        <Route exact path="/create/Controller" component={Controller} />
        <Route exact path="/create/Profile" component={Profile} />
        <Route exact path="/create/Robot" component={Robot} />
        <Route exact path="/create/Servo" component={Servo} />
      </Switch>
    </Router>
  );
}

