import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './qna.css'

const QNA = () => {

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
        <h1> QNA session !</h1>
      <ul>
        <li>If we were stranded on an island, who’d cry first because there’s no WiFi? 😂</li>
        <li>If you had to pick a movie title that describes our relationship, what would it be? 🎬</li>
        <li>If I were a vegetable, what would I be — and why? 🥦</li>
        <li>When did you first realize you actually liked me? ❤️</li>
        <li>Would you rather cuddle all day or go on a long late-night walk with me? 🌙</li>
        <li>Would you rather receive 100 small surprises or one big one (like this website 😉)?</li>
        <li>Would you rather time travel to our first date again or to our wedding day? ⏳💒</li>
        <li>Be honest… who’s cuter when angry? 😤</li>
        <li>What kind of future do you imagine for us? 🌅</li>
        <li>If you had to describe our love in 3 words, what would they be?</li>
        <li>Would you rather have me as your chef or your driver for life? 🍳🚗</li>
        <li>If love had a flavor, what would ours taste like? 🍫</li>
        <li>What’s one thing you never want us to stop doing, no matter how old we get?</li>
        <li>What promise would you want me to make to you right now? 💍</li>
      </ul>
      
      <h1>Completed ?</h1>
      <h2>WE ARE ALMOST DONE! </h2>
              <Link to="/promise">
  <div className="surprise-box">
    <div className="lid"></div>
    <div className="box"></div>
    <div className="ribbon"></div>
    <p className="tag">Open Me 🎁</p>
  </div>
</Link>

            </div>
   
  );
};

export default QNA;
