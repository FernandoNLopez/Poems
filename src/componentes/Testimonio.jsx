import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/${props.imagen}.jpg`)}
          alt={`foto de ${props.alt}`}/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en <b>{props.pais}</b></p> 
          <p className='cargo-testimonio'><i>{props.cargo}</i> en <b>{props.empresa}</b></p> 
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>    
      </div>  
    );
}


export default Testimonio;