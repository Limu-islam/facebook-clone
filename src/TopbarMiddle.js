import React from 'react'
import "./App.css";

function TopbarMiddle({ Icon, tittle}) {
    return (
        <div className="topmiddle">
            <Icon className="icondiv"/>
           <h4>{tittle}</h4>
        </div>
    )
}

export default TopbarMiddle
