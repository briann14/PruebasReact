import React, { Fragment, useState } from "react";

const Contador = () => {
    
    const [numero,setnumero] = useState();
    
    const onsearch = (event) =>{
        setnumero(event.target.value)
    }

    function Aumentar (){
        setnumero(numero + 1);
    }
    const Reducir  = () =>{
        setnumero(numero - 1);
    }

    return (  
        <Fragment>

            <input onChange={onsearch} value={numero}></input>{/*onchange devuelve lo que se este escribiendo*/  }
            <h1>{
            numero
            }</h1>
            <h2>{
            numero < 5 ? 'es menor' : 'es mayor' //operador ternario
            }</h2> 
            <button onClick={Aumentar}>Aumento</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>
    );
}
 
export default Contador;
