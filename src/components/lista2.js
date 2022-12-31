//listado de personas

import React, { Fragment, useState } from 'react'

const Lista2 = () => {

    const [personas, setpersonas] = useState({
        nombre: '' ,
        apellido: '' ,
        turno: ''
    }
    )

    const capturador = (event) => {
        setpersonas({
            ...personas ,
            [event.target.name] : event.target.value
        })
    }

    const enviar = (event) =>{
        event.preventDefault()
        console.log(personas.nombre + " " + personas.apellido + " " + " Tiene turno a las " + personas.turno + "HS"  )
    }

    return (  
        <Fragment>
            <h1>Este es el formulario de citas</h1>

            <form onSubmit={enviar}>
                <label>
                    Nombre
                <input type="text" name='nombre' onChange={capturador} ></input>
                </label>
                <label>
                    Apellido
                <input type="text" name='apellido' onChange={capturador}></input>
                </label>
                <label>
                    Turno
                <input type="number" name='turno' onChange={capturador}></input>
                </label>
            <h3>{personas.nombre}  {personas.apellido} - {personas.turno}HS </h3>
                <button type='submit'>
                    enviar
                </button>
            </form>

        </Fragment>
    );
}
 
export default Lista2;