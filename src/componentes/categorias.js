import { Outlet, Link } from 'react-router-dom';
//En outlet se renderizan las páginas
import '../css/categorias.css'
//import Banner from './Banner';
function Categorias(){
    return(
        <>
            <div className="d-flex justify-content-around div-cat pt-3 pb-3">
            <div> <Link to="/"> Home </Link></div>

            <div> <Link to="/productos">Nuestros Productos</Link></div>

            <div> <Link to="/about">Sobre Nosotros</Link></div>


            <div> <Link to="/contacto">Contacto</Link></div>

        </div>
        {/* <Banner /> */}
        <Outlet />
        </>
        
        
    )
}

export default Categorias;