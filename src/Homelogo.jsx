import React from 'react'

function Homelogo(props) {
    return (
        <div className="homepage" >
            
               {props.icon}
               <div style={{width:'1vw'}}></div>
               <h4>{props.tittle}</h4>
            </div>
       
    )
}

export default Homelogo

