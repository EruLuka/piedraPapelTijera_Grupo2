import { Nav, Button} from 'react-bootstrap';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './src/components/Inicio';
import Integrantes from "./src/components/Integrantes";
import Juego from './src/components/juego';
import Despedida from "./src/components/despedida";

export default class Barra extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-success">

            <div className="container-fluid">
              <link as={Link} to="/" >Poké PPT</link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                  <link as={Link} to={"/inicio"} >Inicio</link>
                  <link as={Link} to={"/juego"} >Jugar</link>
                  <link as={Link} to={"/integrantes"} >Integrantes</link>
                  <link as={Link} to={"/despedida"} >Despedida</link>
                  <a className="nav-link disabled">Grupo 2</a>
                </div>
              </div>
            </div>
          </nav>

        </div>
        <div>
          <Switch>
            <Route path="/inicio">
              <Inicio />
            </Route>
            <Route path="/juego">
              <Juego />
            </Route>
            <Route path="/integrantes">
              <Integrantes />
            </Route>
            <Route path="/despedida">
              <Despedida />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}