import { Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import React from "react";

class Barra extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-success">

          <div className="container-fluid">
            <link as={Link} to="/" >Poké PPT</link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <link as={Link} to="/" >Inicio</link>
                <link as={Link} to="/juego" >Jugar</link>
                <link as={Link} to="/integrantes" >Integrantes</link>
                <link as={Link} to="/despedida" >Salir</link>
                <a className="nav-link disabled">Grupo 2</a>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <Outlet>

          </Outlet>
        </section>
      </>


    );
  }


}
export default Barra;