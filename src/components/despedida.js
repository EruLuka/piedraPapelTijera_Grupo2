import './despedida.css';

function Despedida(){
    return(
         <><div className='Parrafo'>
            <h3 id='despedida-titulo'>Fundamentos de Programacion Web</h3>
            <p id='despedida-texto1'>Muchas gracias por jugar nuestro juego.</p>
            <ul id='despedida-texto2'>Clickear en los Pokemon para continuar.</ul>
        </div>
        <div className='ImagenBoton'>
                <img src='./assets/PIkachuyEevee.jpeg' alt="PikachuyEevee"></img>
        </div></>
    )
}
export default Despedida;
