import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './q1.css';
const Q1 = () => {

useEffect(() => {
    const container = document.querySelector(".heart-container");

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      heart.innerText = "❤️";
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="container">
        <div className="heart-container"></div>
      <h1> LETS PLAY A GAME ! </h1>
      <h2 className="btn"></h2>
      
              {/* ✅ Works perfectly now */}
              <Link to="/qna">
                <button className="glow-btn">💖 YOU IN ? 💖</button>
              </Link>
            </div>
   
  );
};

export default Q1;
