import React from 'react'
import Xmple from './Xmple'
function Groups() {

    var value = 10;
    return (
        <div>
                                    <h1>group page</h1>
                                   {value==10? <Xmple onClick={()=>{console.log(value)}}></Xmple>:<h1>bro </h1>}
 
        </div>
    )
}

export default Groups
