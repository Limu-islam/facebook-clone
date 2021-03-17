import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Gamming() {
    
   var [usersdata, setUserdata] = useState([]) 
//    console.log(usersdata)
   function fetchData(){
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response=>{setUserdata(response.data)})
       .catch(error=>{console.log(error)})
   }

  useEffect(() => {
     fetchData()
     
  })

    return (
        <div>
           <h1>game page</h1>
           
            {usersdata.map((username)=> <div style={{height:'15vh',width:'60vw',backgroundColor:'red'}}>
                <h2> {username.email} </h2>
                <h4> {username.name} </h4>
                </div>)}
        </div>
    )
}

export default Gamming
