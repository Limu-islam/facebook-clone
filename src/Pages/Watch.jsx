import React from "react";
import Watchprop from "../Watchprop";
import ReactPlayer from "react-player";
import "../Home.css";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPersonalVideo } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaSave } from "react-icons/fa";

function Watch() {
  return (
    <div style={{ display: "flex" }}>
      <div className="watchleft">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "23vw",
            height: "4vw",
            marginLeft: "10px",
          }}
        >
          <h2>Watch</h2>
          <AiFillSetting size="25px" />
        </div>
        {/* /////////////////////// */}

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
        {/* ////// */}

        <div style={{ height: "20vh", width: "20vw", marginRight: "20px" }}>
          <Watchprop Icon={MdPersonalVideo} tittle="Home" />
          <Watchprop Icon={GrGamepad} tittle="Gamming" />
          <Watchprop Icon={AiFillVideoCamera} tittle="Live" />
          <Watchprop Icon={FaSave} tittle="Saved video" />
        </div>
      </div>

      {/* body watch */}
      <div>
        <div className="watchright">
          <div
            style={{ height: "85vh", width: "60vw", backgroundColor: "white" }}
          >
            <div
              style={{
                height: "8vh",
                width: "12vw",
                marginLeft: "10px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "red",
                  borderRadius: "50px",
                }}
              ></div>
              <h4>cute Bangla</h4>
            </div>
            <div className="videosection">
              {" "}
              <ReactPlayer
                className="videoplay"
                url="https://www.youtube.com/watch?v=kEWo-rqp3eg"   height="60vh"
                width="55vw"
              />
            </div>
          </div>

          {/* <div
            style={{ height: "85vh", width: "60vw", backgroundColor: "red" }} >
            
          </div> */}
        </div>
      </div>
      {/* last */}
    </div>
  );
}

export default Watch;
