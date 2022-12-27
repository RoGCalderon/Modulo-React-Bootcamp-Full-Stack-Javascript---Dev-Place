import { Fragment, useState } from 'react';
import '../css/formulario.css'

function Formulario(){
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:''
    })

    const handleInputChange = (event) =>{
        //console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })

    }

    const enviarDatos = (event) =>{
        event.preventDefault(); //evita el procesamiento automático
        console.log(datos.nombre+' '+datos.apellido+' '+datos.email+' '+datos.telefono)
    }

    return(

        <Fragment>
        <div className="container-fluid div-form pt-5 pb-5">
        <h2 className="text-center"> Formulario de Contacto: </h2>
        <div className="container w-50">
            <form onSubmit={enviarDatos}>

                <div className="row">
                    <label>
                        Nombre:
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre"
                        name="nombre" 
                        placeholder="Ingrese su nombre"
                        onChange={handleInputChange}
                    ></input>
                    </label>
                </div>

                <div className="row">
                <label>
                    Apellido:
                <input 
                    type="text" 
                    className="form-control" 
                    id="apellido"
                    name="apellido" 
                    placeholder="Ingrese su apellido"
                    onChange={handleInputChange}
                ></input>
                </label>
                </div>

                <div className="row">
                <label>
                    E-mail:
                <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name="email" 
                    placeholder="Ingrese su email"
                    onChange={handleInputChange}
                ></input>
                </label>
                </div>

                <div className="row">
                <label>
                    Teléfono:
                <input 
                    type="number" 
                    className="form-control" 
                    id="telefono"
                    name="telefono" 
                    placeholder="Ingrese su telefono"
                    onChange={handleInputChange}
                ></input>
                </label>
                </div>
                

                

                

                

                <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-outline-warning btn-lg mt-3 btn-send">Enviar</button>
                </div>
                 
            </form>
            

        </div>
    </div>
           

        </Fragment>




/* 
         */
        
    )
}

export default Formulario;