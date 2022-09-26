import './Inicio.css';
import Barra from './src/components/Barra';
import Button from 'react-bootstrap/Button';


function Inicio() {
    return (
        <>
            <div>
                <Barra/>
            </div>

            <div className='section'>
             <img src="./assets/logo2.png" alt="Logo" className="logo-img"></img>
             {/* <Button className="type-button" variant="dark" onClick={[]} >CLICK PARA JUGAR </Button> */}
            </div>

        </>
    );
}
export default Inicio;