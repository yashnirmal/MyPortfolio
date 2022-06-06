import React from 'react';
import "./Second.css";

export default function FixedItem() {


    const qualities = [
      "Curious",
      "Critical Thinker",
      "Smart Working",
      "Excellent in team work",
      "Don't stop till I found the answer of an encountered problem",
    ];

  return (

      <div className="second">
        <div className='bio-heading-div'>
          <span style={{ fontSize: "11rem" }}>Bio:</span>
        </div>

        <div>
          <div className="bio-box">
            {/* <div> */}
              <span style={{ fontSize: "1.5rem" }}>
                Education Background :{" "}
              </span>
              <br />
              <span style={{ fontSize: "1.3rem", fontFamily: "gilroy-medium" }}>
                {" "}
                <u>College</u> : National Intitute of Technology, Karnataka . IT
                department{" "}
              </span>
            {/* </div> */}
            <br />
            <br />
            {/* <div> */}
              <span style={{ fontSize: "1.5rem" }}>Qualities : </span>
              <br />
              {qualities.map((el, index) => (
                <div
                  style={{ fontSize: "1.3rem", fontFamily: "gilroy-medium" }}
                >
                  {el}
                </div>
              ))}
            {/* </div> */}
          </div>
        </div>
      </div>
  );
}
