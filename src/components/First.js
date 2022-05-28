import React from 'react';
import "./First.css";
import myPhoto from "../assests/pictures/me.png"

export default function First() {

  const profile=['FrontEnd Developer'];
  const technologies=['HTML','CSS','Javascript','ReactJs','Firebase'];

  return (
    <div className="first">
      <div className="header-div">
        <span className="cursive-name">Yash Nirmal</span>
      </div>

      <div className="middle-div">
        <span style={{ fontSize: "6rem" }}>Hi, I am Yash Nirmal</span>

        <img className='my-photo' style={{ width: "12rem",margin:"50px 0" }} src={myPhoto} alt="my_photo" />

        <div>
          <span style={{ fontSize: "2rem", fontWeight: 200,marginBottom:6 }}>What am I?</span>
          <div style={{marginBottom:20}}>
            {profile.map((el, index) => (
              <span className="rounditem">{el}</span>
            ))}
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <span style={{ fontSize: "2rem",marginBottom:6}}>Technologies I work with:</span>
          <div style={{width:"60%",textAlign:"center",height:"fit-content"}}>
            {technologies.map((el, index) => (
              <span className="rounditem">{el}</span>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
