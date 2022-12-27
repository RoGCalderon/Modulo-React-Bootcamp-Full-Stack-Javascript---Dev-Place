import data from "../data/data";
//import Card from './Card'
import '../css/productos.css'
import { useState } from 'react';
import Listabotones from "./Listabotones";
import Listaproductos from "./Listaproductos";



function Productos(){

    const todasCategorias = [ 'Todos' ,...new Set(data.map(producto => producto.categoria))]
    //console.log(todasCategorias)
    //guardo el arreglo adentro de un estado
    const [categorias, setCategorias] = useState(todasCategorias)
    const [productos, setProductos] = useState(data)

    const filterCategory = (categoria) => {
        if(categoria === 'Todos'){
            setProductos(data)
            return
        }

        const filteredData = data.filter(producto => producto.categoria === categoria);
        //console.log(filteredData)
        setProductos(filteredData);
        
    }

    return(
        <div className="row mt-5 ms-0 me-0">
            <h1 className='text-center mb-3'>Nuestros Productos: </h1>
             
            <Listabotones categorias={categorias} filterCategory={filterCategory} />
             
            <Listaproductos productos={productos} />
                    
        </div>
       
    ) 
}

export default Productos;

//{ articulos.map((articulo)=>{
//    return <Card titulo={articulo.titulo} imagen={articulo.imagen} precio={articulo.precio}/>
//})}