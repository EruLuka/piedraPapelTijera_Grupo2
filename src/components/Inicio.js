import './Inicio.css';
import Barra from './Barra';
import Button from 'react-bootstrap/Button';

function Inicio() {
    return (
        <>
            <div>
                <Barra>
                </Barra>
            </div>

            <div className='section'>
             <img src="/assets/logo2.png" alt="Logo" className="logo-img"></img>
            </div>
            <div></div>
        </>
    );
}
export default Inicio;