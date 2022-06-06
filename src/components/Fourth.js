import React from 'react';
import "./Fourth.css";

export default function Fourth(props) {


    const socials = [
      "https://twitter.com/YashNirmal42",
      "https://www.linkedin.com/in/yash-nirmal-062b68220/",
      "https://www.instagram.com/yashnirmal_15/",
      "https://github.com/yashnirmal",
      "yash15nirmal@gmail.com",
    ];

    const socialsite = ["Twitter", "LinkedIn", "Instagram", "Github", "Gmail"];

    const socialLogo = ["twitter", "linkedin", "insta", "github", "gmail"];


    function handleSocialClick(link) {
      if (link === "yash15nirmal@gmail.com") {
        props.handleClick();
      } else {
        window.open(link);
      }
    }


  return (
    <div className="fourth">
      <div className='contact-div'>
        <span style={{ fontSize: "11rem" }}>Contact Me!</span>
      </div>

      <div className='social-cont' style={{ display: "flex",justifyContent:"center", alignItems: "center" }}>
        <div 
          style={{ width: "70%", height: "fit-content", textAlign: "center" }}
        >
          {socialsite.map((name, index) => (
            <div
              className="social-links"
              onClick={() => handleSocialClick(socials[index])}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={require(`../assests/pictures/${socialLogo[index]}.png`)}
                  style={{ marginRight: 10 }}
                  alt="logo"
                />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
