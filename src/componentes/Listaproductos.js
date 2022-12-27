import Card from './Card'

function Listaproductos({productos}){
    return(
        <div className='container-fluid'>
        <div className='row'>
            
            {productos.map(producto => (
                <Card 
                    key={producto.id} 
                    titulo={producto.titulo} 
                    imagen={producto.imagen} 
                    precio={producto.precio}
                />
            ))}
        </div>
        </div>
    )
}

export default Listaproductos;