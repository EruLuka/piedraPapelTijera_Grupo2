import Button from "react-bootstrap/Button";
import "./Juego.css";
//import Barra from "./Barra";

function Juego() {

  return (
    <>
    {/* <div><Barra/></div> */}
    <section id="juego" className="gameContent">
      <div className="full-gameArea">
        <aside className="left-area">
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
          </div>
        </aside>
        <aside className="right-area">
          <div className="img-cpu">
            <img
              src="/assets/Mew.png"
              alt="imagen cpu"
            ></img>
          </div>
          <div>
            <img
              src="https://picsum.photos/id/1060/600/400"
              alt="imagen jugada jugador"
            ></img>
          </div>
        </aside>
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
      </div>
    </section>
    </>
  );
}
export default Juego;
