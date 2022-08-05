import React from 'react';
import ProjectContainer from './ProjectContainer';
import "./Third.css"; 

export default function Third() {


  const projectDetails = [
  ["Bloggator","A highly scalable MERN website where people write blogs. You can follow your favorite bloggers, save there blogs and write your blogs as well.MondoDB is used as the NoSql database with security features to protect users password. Writing blog is made easy using markdown style of writing.","https://bloggator.netlify.app/",["ReactJs","MongoDB","NodeJs","Express","Redux","json web token(jwt)","pure CSS","MaterialUI","react-markdown"]],
      ["Crypto Tracker and News","This website show the almost all the data related to 200 cryptocurrencies aand shows you news happening around the crypto world","https://crypto-news-and-tracker.netlify.app/",["ReactJs","pure CSS","Fetch API","react-chart-js 2","MaterialUI"]],
      ["Online Shop Center","A website to show the use of redux in the reactjs. The fake data is retrieved from and API and other operations are done using react redux","https://shop-center.netlify.app/",["ReactJs","Redux","Fetch API"]],
      ["ToDoEr","This website is made by me as a project submission in college. This website contains signup/login functionalities, as well as Firebase realtime database","https://todoer-task-handeler.netlify.app/",["ReactJs","pure CSS","Bootstrap","Firebase authorization","Firebase Firestore"]],
    ["MemeMatic","This is a website which shows you trending memes which are scrapped from Reddit and then fetched using an API call","https://meme-matic.netlify.app/",["ReactJs","pure CSS","Fetch API","Localstorage"]],
    ["Twitter Home Page Clone","This a single page clone of the Twitter's home page ","https://tweeter-home-clone.netlify.app/",["ReactJs","pure CSS"]],
    ["My Portfolio Website","A website to show details about my work and myself","https://yash-nirmal.netlify.app/",["ReactJs","pure CSS"]],
    ["Lottery smart contract","This contract can be used to organize lottery, where people submit fix amount of ether as a entry fees and a random winner is chosen","https://github.com/yashnirmal/Lottery-smart-contract",["Solidity"]],
    ["Crowd Funding Smart Contract","You can create multiple campaigns for crowd funding","https://github.com/yashnirmal/crowd-funding-smart-contract",["Solidity"]]
  ];


  return (
    <div className="third">
      <div style={{ fontSize: "5em",padding: "2%"}}>Projects</div>
      <div className="project-div">
        {projectDetails.map((arr, index) => (
          <ProjectContainer arr={arr} />
        ))}
      </div>
    </div>
  );
}
