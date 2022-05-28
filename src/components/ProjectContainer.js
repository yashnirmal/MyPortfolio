import React from 'react';
import "./ProjectContainer.css";

export default function ProjectContainer(props) {
  return (
    <div className="project-con">
      <a href={props.arr[2]} target="_blank" className="name-link">
        {props.arr[0]}
      </a>
      {/* <span style={{fontSize:"2rem"}}>{props.arr[0]}</span> */}
      <div style={{ fontSize: "1.2rem", fontFamily: "gilroy-medium" }}>
        {props.arr[1]}
      </div>
      <div>
        {props.arr[3].map((el, index) => (
          <span className="rounditem-tech">{el}</span>
        ))}
      </div>
    </div>
  );
}
