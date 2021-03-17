import React from "react";
import {Link} from "react-router-dom"

import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SiAirplayvideo } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import TopbarMiddle from "./TopbarMiddle";
// left side
import { GrAdd } from "react-icons/gr";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";


function Topbar() {


  return (
    <div className="top-bar">
      {/* left side */}
      <div className="leftside">
        <FaFacebook className="fb-logo"></FaFacebook>
        <div className="searchdiv">
          <FaSearch></FaSearch>
          <input className="search" placeholder="Search Facebook"></input>
        </div>
      </div>

      {/* middle side */}
      <div className="middlediv">
   <div className="secondmiddlediv">
 <Link to="/"><TopbarMiddle  Icon={FaHome} /></Link>
    <Link to="/watch"><TopbarMiddle Icon={SiAirplayvideo} /></Link>
    <Link to="/marketplace"><TopbarMiddle Icon={SiMarketo} /></Link>
    <Link to="/groups"> <TopbarMiddle Icon={HiUserGroup} /></Link>
    <Link to="/gamming"><TopbarMiddle Icon={IoGameControllerOutline}/></Link>
   </div>

     
    
     
      </div>

               {/* right side */}
      <div className="rightdiv">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgb(228, 227, 225)',height:'5vh',width:'5vw',borderRadius:'15px'}}>
<div style={{height:'20px',width:'20px',backgroundColor:'blue',borderRadius:'50px'}}></div>
<h5>Limu</h5>
        </div>
        
        <div style={{height:'40px',width:'40px',backgroundColor:'rgb(228, 227, 225)',borderRadius:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}><GrAdd size="20px"/> </div>
       <div  style={{height:'40px',width:'40px',backgroundColor:'rgb(228, 227, 225)',borderRadius:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}><BiMessageRoundedDots  size="20px"/></div>
       <div  style={{height:'40px',width:'40px',backgroundColor:'rgb(228, 227, 225)',borderRadius:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}><IoMdNotifications  size="20px"/></div>
       <div  style={{height:'40px',width:'40px',backgroundColor:'rgb(228, 227, 225)',borderRadius:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}><BiDownArrow  size="20px"/></div>
    
      {/* last */}
    </div>
    </div>
  );
}

export default Topbar;
