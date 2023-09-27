import React from "react";
import videoBg from "../asserts/videoBg.mp4";
import "./main-style.css";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>

      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <h1>Welcome</h1>
        <p>to my Website !</p>
      </div>
    </div>
  );
};

export default Main;
