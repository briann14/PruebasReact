import React, { Fragment, useState } from 'react'

const Lista = () => {
    const [fruta,setfruta] = useState([]);
    const frutita = prompt("que fruta queres");
   fruta.push(frutita);
   while(confirm("queres otra?")){
    const frutita = prompt("que fruta queres pa")
    fruta.push(frutita)
   }
    return(
        <Fragment>
        <h1>soy lista</h1>
       
        </Fragment>
    )
}
export default Lista