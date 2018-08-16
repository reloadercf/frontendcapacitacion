import React from 'react';
import {Link} from 'react-router-dom'

const Main = ({id,classNames,styles,message,customFields,handleClose}) => 
{

  return (
    <div className={classNames} id={id} style={styles}>
      <div className='s-alert-box-inner'>
        {message}
        {/* <h3>Tu resultado fue de: {resultados}  aciertos</h3> */}
      </div>
      <h3 className="">{customFields.customerName}</h3>
  
      <span className='s-alert-close' onClick={handleClose}></span>
    </div>
  );
}

export default Main;