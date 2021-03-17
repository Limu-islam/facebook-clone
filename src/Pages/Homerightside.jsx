import React from 'react'
import "../Home.css"
import quran from './quran.jpg'
import salattime from './salat time.png'

function Homerightside() {
    return (
        <div  className="Homerightside">
            <h3 style={{marginLeft:'10px'}}>Sponsored</h3>
            <div style={{height:'15vh',width:'15vw',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px',marginLeft:'10px'}}>
                <img style={{height:'3',width:'6vw'}} src={quran}></img>
                <h4>Take to space</h4>
            </div>

            <div style={{height:'15vh',width:'14vw',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px',marginLeft:'10px'}}>
                <img style={{height:'3',width:'6vw',}} src={salattime}></img>
                <h4>Come to the <br></br> Salat</h4>
            </div>
            <hr></hr>

            <div style={{display:"flex"}}>
                <div style={{padding:'10px',justifyContent:'space-around',display:'flex',flexDirection:'column'}}>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>
                <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:'red'}}></div>

                </div >
                  <div>
                <h4>Limu Islam</h4>
                <h4>Limu Islam</h4>
                <h4>Limu slam</h4>
                <h4>Limu Islam</h4>
                <h4>Limu Islam</h4>
                <h4>Limu Islam</h4>
                <h4>Limu Islam</h4>
                <h4>Limu Islam</h4>
</div>
            </div>
        </div>
    )
}

export default Homerightside
