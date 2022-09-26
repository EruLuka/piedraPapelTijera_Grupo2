import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Barra(){
    return (
      <>
        <Navbar className="navBg" variant="black" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Poké PPT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link as={Link} to="/Inicio" >Inicio</Link>
                <Link as={Link} to="/juego" >Jugar</Link>
                <Link as={Link} to="/integrantes" >Integrantes</Link>
                <Link as={Link} to="/despedida" >Salir</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section>
          <Outlet> </Outlet>
        </section>
      </>
    );
}
export default Barra;