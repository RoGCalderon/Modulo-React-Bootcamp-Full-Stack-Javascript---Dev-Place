function Listabotones({categorias, filterCategory}){
    return(
        <div className="container d-flex justify-content-center mb-5">
            <div className="btn-group" role="group" aria-label="Basic outlined example">

            {categorias.map(categoria=>(
                <button
                    type="button"
                    className="btn btn-outline-warning text-dark"
                    onClick={()=> filterCategory(categoria)}
                    key={categoria}
                >
                    {categoria}
                </button>
            ))}
            </div>

        </div>   
    )
}

export default Listabotones;

