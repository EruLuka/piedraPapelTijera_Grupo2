import './Inicio.css';
import Barra from '../routes/Barra';
import Button from 'react-bootstrap/Button';


function Inicio() {
    return (
        <>
            <div>
                <Barra/>
            </div>

            <div className='section'>
             <img src="/assets/logo2.png" alt="Logo" className="logo-img"></img>
            </div>

        </>
    );
}
export default Inicio;