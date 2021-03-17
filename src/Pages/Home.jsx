import React from 'react'
import "../Home.css"
import Homelogo from '../Homelogo'
import Bodydiv from '../Pages/Bodydiv'
import Marketplace from '../Pages/Marketplace'
import Homerightside from '../Pages/Homerightside'

import { FaUserFriends } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { SiGoogleadsense } from "react-icons/si";
import { BiDonateBlood } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { SiPagekit } from "react-icons/si";
import { BiUpArrowAlt } from "react-icons/bi";

function Home() {
 
    var iconStyle = {height:'20px',width:'20px',}

    return (
        <div style={{height:'90vh',width:'100vw',display:'flex'}}>
            {/* body left side */}
    <div style={{backgroundColor:'rgb(228, 227, 225)',height:'90vh',width:'23vw',overflow:'auto'}}>

<div className="logos">
    
    <Homelogo icon={<div style={{height:'20px',borderRadius:'50%',width:'20px',backgroundColor:'red'}}></div>} tittle="Jannat Islam"/>

    <Homelogo icon={<FaUserFriends style={iconStyle}></FaUserFriends>} tittle="Friend"/>
    <Homelogo icon={<GrGroup style={iconStyle}></GrGroup>} tittle="Group"/>
    <Homelogo icon={<FaFacebook style={iconStyle}></FaFacebook>} tittle="Facebook"/>
    <Homelogo icon={<BsFillBookmarksFill style={iconStyle}></BsFillBookmarksFill>} tittle="Bookmarks"/>
    <Homelogo icon={<BsFillStopwatchFill style={iconStyle}></BsFillStopwatchFill>} tittle="Watch"/>
    <Homelogo icon={<MdEvent style={iconStyle}></MdEvent>} tittle="Event"/>
    <Homelogo icon={<GrTableAdd style={iconStyle}></GrTableAdd>} tittle="add"/>
    <Homelogo icon={<SiGoogleadsense style={iconStyle}></SiGoogleadsense>} tittle="sense"/>
    <Homelogo icon={<BiDonateBlood style={iconStyle}></BiDonateBlood>} tittle="Blood"/>
    <Homelogo icon={<FaFacebookMessenger style={iconStyle}></FaFacebookMessenger>} tittle="Messenger"/>
    <Homelogo icon={<BiSave style={iconStyle}></BiSave>} tittle="Save"/>
    <Homelogo icon={<SiPagekit style={iconStyle}></SiPagekit>} tittle="Pages"/>
    <Homelogo icon={<BiUpArrowAlt style={iconStyle}></BiUpArrowAlt>} tittle="Arrow"/>
   <hr></hr>
   <h4>jhhgggggg</h4>
   <h4>hdhdgdgdh</h4>


</div>
    </div>

            {/* body middle side */}

    <div style={{backgroundColor:'rgb(228, 227, 225)',height:'90vh',width:'57vw',}}>
<Bodydiv/>
    </div>

            {/* body right side */}

    <div style={{height:'80',width:'19vw'}}>
    <Homerightside/>
    </div>

        </div>
    )
}

export default Home
