import './inicio.css';
import Barra from './Barra';
import Button from 'react-bootstrap/Button';
import Pie from './Pie';


function Inicio() {
    return (
        <>
            <div>
                <Barra>
                </Barra>
            </div>

            <div className='section'>
             <img src="../public/assets/logocine.png" alt="Logo" className="logo-img"></img>
            </div>
            <div></div>
        </>
    );
}
export default Inicio;