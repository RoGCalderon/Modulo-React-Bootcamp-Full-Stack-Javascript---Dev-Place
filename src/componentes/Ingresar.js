import coffee from '../assets/coffee.png'
import '../css/ingresar.css'

function Ingresar(){
    return(
        <div className="row">
            <div className="col col-coffee pt-5 pb-3 ps-5">
                <img src={coffee} alt="café" className='coffee-img'/>
            </div>
            <div className="col">
                
                <div className='Container w-75 ms-5'>
                <h3 className='text-center mt-5 text-login'>Ingrese a su cuenta:</h3>
                    <form>
                        <div className="row text-dark mt-5">
                        <label >
                            Nombre de Usuario:
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombreusuario"
                            name="nombreusuario" 
                            placeholder="Ingrese nombre de usuario"
                        
                        ></input>
                        </label>
                        </div>

                        <div className="row text-dark mt-3">
                        <label >
                            Contraseña:
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            name="password" 
                            placeholder="Ingrese contraseña"
                        
                        ></input>
                        </label>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button type="submit" className="btn btn-outline-warning btn-lg mt-3 btn-send">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Ingresar;