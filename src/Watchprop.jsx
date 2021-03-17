import React from 'react'

function Watchprop( {Icon, tittle}) {
    return (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:"center",height:"9vh",width:'10vw',marginLeft:'10px'}}>
            <Icon size="20px"/>
            <h3>{tittle}</h3>
        </div>
    )
}

export default Watchprop
