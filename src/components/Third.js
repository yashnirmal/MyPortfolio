import React from 'react';
import ProjectContainer from './ProjectContainer';
import "./Third.css"; 

export default function Third() {


  const projectDetails = [
    ["My portfolio website","A website to show details about my work and myself","https://yash-nirmal.netlify.app/",["ReactJs","pure CSS"]],
    ["MemeMatic","This is a website which shows you trending memes which are scrapped from Reddit and then fetched using an API call","https://meme-matic.netlify.app/",["ReactJs","pure CSS","Fetch API","Localstorage"]],
    ["Crypto Tracker and News","This website show the almost all the data related to 200 cryptocurrencies aand shows you news happening around the crypto world","https://crypto-news-and-tracker.netlify.app/",["ReactJs","pure CSS","Fetch API","react-chart-js 2","MaterialUI"]],
    ["Twitter Home Page Clone","This a single page clone of the Twitter's home page ","https://tweeter-home-clone.netlify.app/",["ReactJs","pure CSS"]],
    ["ToDoEr","This website is made by me as a project submission in college. This website contains signup/login functionalities, as well as Firebase realtime database","https://todoer-task-handeler.netlify.app/",["ReactJs","pure CSS","Bootstrap","Firebase authorization","Firebase Firestore"]],
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
