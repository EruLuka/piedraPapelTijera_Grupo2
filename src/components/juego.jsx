import Button from "react-bootstrap/Button";
import "./Juego.css";
import Barra from "./Barra";
import { useEffect, useState } from "react";

function Juego() {
  const [jugador, setJugador] = useState("/assets/logo2.png");
  const [jugada, setJugada] = useState("/assets/SignoPregunta.png");
  const [jugadaCPU, setJugadaCPU] = useState("/assets/SignoPregunta.png");
  

  const hacerJugada = (srcJugador, srcJugada) => {
    setJugador(srcJugador)
    setJugada(srcJugada)
    let nro= Math.floor(Math.random()*3);
    if (nro===0){
      setJugadaCPU("/assets/FireType.png")
    } else if (nro===1){
      setJugadaCPU("/assets/WaterType.png")
    }else{
      setJugadaCPU("/assets/GrassType.png")
    }
  }

  /* Math.floor(Math.random()*3) */

  /* useEffect(()=>{

  }, []) */
  return (
    <>
      <div><Barra/></div>
      <section id="juego" className="gameContent">
        
        <div className="full-gameArea">
          {/* Área izquierda */}
          <aside className="area">
            <div className="img-jugada-cpu">
              <img
                src={jugadaCPU}
                alt="imagen jugada cpu"
              ></img>
            </div>
            <div className="img-jugador">
              <img
                src={jugador}
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
                src={jugada}
                alt="imagen jugada jugador"
              ></img>
            </div>
          </aside>
        </div>

        {/* Àrea de elecciòn de jugada */}
        <footer className="choosing-area">
          <Button className="type-button" variant="primary" onClick={() => hacerJugada("/assets/CharizardBack.png","/assets/FireType.png")}>
            <img src="/assets/FireType.png" alt="fuego"></img>
          </Button>
          <Button className="type-button" variant="primary" onClick={() => hacerJugada("/assets/FeraligatrBack.png","/assets/WaterType.png")}>
            <img src="/assets/WaterType.png" alt="agua"></img>
          </Button>
          <Button className="type-button" variant="primary" onClick={() => hacerJugada("/assets/SceptileBack.png","/assets/GrassType.png")}>
            <img src="/assets/GrassType.png" alt="hoja"></img>
          </Button>
        </footer>

      </section>
    </>
  );
}

export default Juego;
