import React from 'react'
import "../Home.css"
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Marketprop from './Marketprop'
import { MdPersonalVideo } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import surah from  './surah.jpg'


function Marketplace() {
    return (
        <div>
     <div style={{display:'flex'}}>
<div className="marketleft">
<div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "21vw",
            height: "4vw",
            marginLeft: "15px",
          }}
        >
          <h2>Market place</h2>
          <AiFillSetting size="25px" />
        </div>
        {/* ///////// */}


        <div
          style={{
            height: "4.5vh",
            width: "22vw",
            backgroundColor: "rgb(228, 227, 225)",
            borderRadius: "12px",
            marginLeft: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AiOutlineSearch size="20px" style={{ marginLeft: "5px" }} />
          <input
            style={{
              height: "4vh",
              width: "19vw",
              backgroundColor: "rgb(228, 227, 225)",
              borderRadius: "12px",
              marginLeft: "5px",
              border: "none",
              outline: "none",
            }}
            placeholder="search videos"
          ></input>
        </div>


<div style={{ height: "40vh",marginLeft:'10px',width: "10vw",justifyContent:'space-between',alignItems:'center' }}>
          <Marketprop Icon={MdPersonalVideo} tittle="Home" />
          <Marketprop  Icon={GrGamepad} tittle="Gamming" />
          <Marketprop Icon={AiFillVideoCamera} tittle="Live" />
          <Marketprop Icon={FaSave} tittle="Saved video" />
        </div>




</div>
<div className="marketright">
    <div className="grid">
        <div className="griditems"><img style={{height:'20vh',width:'20vw'}} src={surah}></img></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>



    </div>
</div>

     </div>

        </div>
    )
}

export default Marketplace
