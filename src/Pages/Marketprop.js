import React from 'react'
import "../Home.css"

function Marketprop( { Icon, tittle}) {
    return (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Icon style={{height:'20px',width:'30px'}}/>
            <h4>{tittle}</h4>
        </div>
    )
}

export default Marketprop
