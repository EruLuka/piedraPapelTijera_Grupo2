import React from "react";
class Barra extends React.Component{
    render(){
        return (
            <header>
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                               <a class="navbar-brand" href="#">Navbar</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                       </button>
                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                         <a class="nav-link" href="#">Inicio</a>
                         <a class="nav-link" href="#">Jugar</a>
                         <a class="nav-link" href="#">Desarrolladores</a>
                         <a class="nav-link" href="#">Salir</a>
                       </div>
                          </div>
                        </div>
                 </nav>
          </header>


        );
    }


}
export default Barra;