import './inicio.css';
import Barra from './componentes/Barra';
import Button from 'react-bootstrap/Button';
import Footer from './componentes/Footer';


function Inicio() {
    return (
        <>
            <div>
                <Barra/>
            </div>

            <div className='section'>
             <img src="../public/assets/logo2.png" alt="Logo" className="logo-img"></img>
            </div>

            <div>
                <Footer/>
            </div>
        </>
    );
}
export default Inicio;