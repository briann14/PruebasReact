import React, { Fragment, useState } from 'react'

const Formulario = () => {
    const [datos,setdatos]  = useState({
        nombre: '' , 
        apellido: ''
    })
 
    const formulario = (event) => {
        setdatos({
            ...datos ,
            [event.target.name] : event.target.value
        })
    }

    const enviar = (event) => {
        event.preventDefault()
        console.log(datos.nombre + " " + datos.apellido )
    }

    return ( 
        <Fragment>
            <h1>Formulario Comun</h1>

            <form onSubmit={enviar}>
                <label>
                    Nombre
                <input type="text" onChange={formulario} name = "nombre"></input>
                </label>
                <label>
                    Apellido
                <input type="text" onChange={formulario} name = "apellido"></input>
                </label>
                <h2>{datos.nombre} - {datos.apellido}</h2>
                <button type="submit">Enviar</button>
            </form>




        </Fragment>
     );
}
 
export default Formulario;