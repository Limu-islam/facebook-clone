import React from "react";
import "../Home.css";
import { AiFillVideoCamera } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiRadioactive } from "react-icons/gi";
import { BiRightArrow } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";
import { BiMessage } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { RiStickyNoteLine } from "react-icons/ri";


import surah from "./surah.jpg"

function Bodydiv() {
  return (
    <div className="Bodydiv">
      <div className="stories">
        <div
          style={{
            height: "30vh",
            width: "8vw",
            backgroundColor: "white",
            boxShadow: "5px 10px 8px #888888",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            height: "30vh",
            width: "8vw",
            backgroundColor: "white",
            boxShadow: "5px 10px 8px #888888",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            height: "30vh",
            width: "8vw",
            backgroundColor: "white",
            boxShadow: "5px 10px 8px #888888",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            height: "30vh",
            width: "8vw",
            backgroundColor: "white",
            boxShadow: "5px 10px 8px #888888",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            height: "30vh",
            width: "8vw",
            backgroundColor: "white",
            boxShadow: "5px 10px 8px #888888",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      {/* ////// */}

      <div
        style={{
          height: "20vh",
          width: "40vw",
          backgroundColor: "white",
          boxShadow: "5px 10px 8px #888888",
          borderRadius: "10px",
          marginTop: "20px",
          marginLeft: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
            height: "10vh",
            width: "40vw",
          }}
        >
          <div
            style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}
          ></div>
          <input
            style={{
              height: "5vh",
              borderRadius: "20px",
              width: "35vw",
              backgroundColor: " rgb(228, 227, 225)",
              border: "none",
              outline: "none",
            }}
            placeholder="What's on your mind,Limu?"
          ></input>
        </div>

        <hr style={{ width: "35vw" }}></hr>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "6vh",
            width: "40vw",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "8.5vw",
            }}
          >
            <AiFillVideoCamera size="30px" />
            <h4>Live video</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "6vw",
            }}
          >
            <BiPhotoAlbum size="30px" />
            <h4>Photo</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "8.5vw",
            }}
          >
            <GiRadioactive size="30px" />
            <h4>Activities</h4>
          </div>
        </div>
      </div>
      {/* ////////////////////////// */}

      <div
        style={{
          height: "10vh",
          width: "40vw",
          backgroundColor: "white",
          boxShadow: "5px 10px 8px #888888",
          borderRadius: "10px",
          marginTop: "20px",
          marginLeft: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
          <div className="createroom">
              <AiFillVideoCamera size="25"/>
              <h4>Create room</h4>
              </div>
              <div className="moredivs">
                  <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
                  <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
                  <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
                  <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
                  <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
                      <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
              </div>
              </div>

              {/* /////////////////////// */}
          <div className="picdiv">
        <div className="picicon">
        <div     style={{
              height: "40px",
              borderRadius: "50%",
              width: "40px",
              backgroundColor: "red",
            }}></div>
<div className="tittlename">
    <div style={{display:'flex'}}>
        <h4>Limu Islam</h4>
<BiRightArrow style={{marginTop:'25px'}}/>
<h4>Girls Piority</h4>   
</div>
<div className="tittlediv">

</div>
</div>  
  </div>
        

<div className="imgdiv"> <img style={{height:'40vh',width:'30vw'}} src={surah}></img>
</div> 
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'38vw',marginLeft:'10px',height:'3vh'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'6vw',}}>
       <AiFillLike/>
       <GiLoveMystery/>
       <GoSmiley/>
       <h4>678</h4>
       </div> 
    <h4>Comments</h4>
</div>
 <hr></hr>
 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'25vw',marginLeft:'85px',height:'6vh'}}>
     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'5vw'}}><AiFillLike size="23px"/><h4>Like</h4></div>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'8vw'}}><BiMessage size="20px"/><h4>Comment</h4></div>
 </div>
  <hr></hr>
  
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'38vw',marginLeft:'12px',height:'6vh'}}>
    <h4>View Previous Comments</h4>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'10vw',marginLeft:'50px',height:'6vh'}}> 
   <h4>All comments</h4>
   <BiDownArrow/>
   </div>
</div>

<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'18vw',marginLeft:'12px',height:'8vh',}}>
    <div style={{height:'30px',width:'30px',backgroundColor:'red',borderRadius:'50px'}}></div>
<div style={{height:'6vh',width:'15vw',backgroundColor:'rgb(228, 227, 225)',borderRadius:'12px',display:'flex',alignItems:'center'}}><h4 style={{marginLeft:'10px'}}>Limu Islam</h4></div>
</div>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'8vw',marginLeft:'70px',height:'2vh',}}>
       <h5>Like</h5>
   <h5>Reply</h5>
   <h5>3h</h5> 
</div>     

     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'10px',width:'38vw',marginLeft:'20px'}}>
         <div style={{height:'30px',width:'30px',borderRadius:'50px',backgroundColor:"red"}}></div>
         <div style={{height:'6vh',width:'35vw',backgroundColor:'rgb(228, 227, 225)',borderRadius:'12px',display:'flex',alignItems:'center'}}>
             <input style={{height:'6vh',width:'30vw',border:'none',outline:'none',backgroundColor:'rgb(228, 227, 225)',borderRadius:'12px',marginLeft:'8px'}} placeholder="Write a comment"></input>
        
       <div style={{width:'8vw',justifyContent:'space-between',display:'flex',marginRight:'8px'}}> <GoSmiley/>
        <AiOutlineCamera/>
        <AiOutlineFileGif/>
        <RiStickyNoteLine/></div>
         </div>

         </div>         
</div>
      
      
      
      
      {/* last */}
    </div>
  );
}

export default Bodydiv;
