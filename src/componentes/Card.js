import '../css/card.css';

function Card(props) {
    return (
        <div className="card mb-3 ms-5">
            <img src={require(`../../public/imagenes/${props.imagen}`)} className="card-img-top" alt="..." />
                <div className="card-body border-top">
                    <h5 className="card-title text-center">{props.titulo}</h5>
                    <p className="card-text text-center">{props.precio}</p>
                    <div className="d-flex justify-content-center">
                    <a href="..." className="btn btn-comprar text-white text-center"> Añadir </a>
                    </div>
                    
                </div>
        </div>
    )
}

export default Card;
