import React from "react";
class Barra extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Poké PPT</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                       </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                      
                         <a className="nav-link" href="#">Inicio</a>
                         <a className="nav-link" href="#">Jugar</a>
                         <a className="nav-link" href="#">Desarrolladores</a>
                         <a className="nav-link" href="#">Salir</a>
                       </div>
                          </div>
                        </div>
                 </nav>
          </div>


        );
    }


}
export default Barra;