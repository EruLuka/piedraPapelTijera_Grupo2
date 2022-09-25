import Button from "react-bootstrap/Button";
import "./Juego.css";
import Barra from "./Barra";

function Juego() {
  return (
    <>
      <div><Barra/></div>
      <section id="juego" className="gameContent">
        
        <div className="full-gameArea">
          {/* Área izquierda */}
          <aside className="area">
            <div className="img-jugada-cpu">
              <img
                src="https://picsum.photos/id/237/600/400"
                alt="imagen jugada cpu"
              ></img>
            </div>
            <div className="img-jugador">
              <img
                src="https://picsum.photos/id/548/600/400"
                alt="imagen jugador"
              ></img>
              <p>Puntaje jugador</p>
            </div>
          </aside>

          {/* Área derecha */}
          <aside className="area">
            <div className="img-cpu">
              <img src="/assets/Mew.png" alt="imagen cpu"></img>
            </div>
            <p>Puntaje CPU</p>
            <div>
              <img
                src="https://picsum.photos/id/1060/600/400"
                alt="imagen jugada jugador"
              ></img>
            </div>
          </aside>
        </div>

        {/* Àrea de elecciòn de jugada */}
        <footer className="choosing-area">
          <Button className="type-button" variant="primary" onclick={[]}>
            <img src="/assets/FireType.png" alt="piedra"></img>
          </Button>
          <Button className="type-button" variant="primary" onclick={[]}>
            <img src="/assets/WaterType.png" alt="papel"></img>
          </Button>
          <Button className="type-button" variant="primary" onclick={[]}>
            <img src="/assets/GrassType.png" alt="tijeras"></img>
          </Button>
        </footer>

      </section>
    </>
  );
}
export default Juego;
