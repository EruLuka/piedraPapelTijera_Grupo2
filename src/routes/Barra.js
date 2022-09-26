import { Link, Outlet } from "react-router-dom"
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Barra() {
    return (
      <>
      <Navbar>
        

          <div className="container-fluid">
            <link as={Link} to="/" >Poké PPT</link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
<nav className="navbar navbar-expand-lg bg-success">
                <Link as={Link} to="/" >Inicio</Link>
                <Link as={Link} to="/juego" >Jugar</Link>
                <Link as={Link} to="/integrantes" >Integrantes</Link>
                <Link as={Link} to="/despedida" >Salir</Link>
                <a className="nav-link disabled">Grupo 2</a>
        </nav>
          </div>
      </Navbar>
        <section>
          <Outlet></Outlet>
        </section>
      </>
    );
}
export default Barra;