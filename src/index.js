import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let lastScrollTop = 0;
// let nav = document.getElementsByClassName("navbar");

// window.addEventListener("scroll", () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(scrollTop + " " + lastScrollTop);
//   console.log(nav.classList);
//   if (scrollTop > lastScrollTop) {
//     nav.classList.add('top');
//   } else {
//     nav.classList.remove("top");
//   }
//   lastScrollTop = scrollTop;
// });