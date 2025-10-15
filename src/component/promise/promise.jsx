
import React, { useEffect } from "react";
import "./promise.css";
import Pic_1 from "../../assets/pic_1.jpg";
import Pic_2 from "../../assets/pic_2.jpg";
import Pic_3 from "../../assets/pic_3.jpg";
import Pic_4 from "../../assets/pic_4.jpg";

const Promise = () => {
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

  // 🌸 Function to trigger flower rain
  const startFlowerRain = () => {
    alert("💍 She accepted the promise! 🌸 Forever starts now ❤️");

    const count = 100;
    for (let i = 0; i < count; i++) {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 3 + 3 + "s";
      flower.innerText = ["🌸", "🌷", "💮", "🌺", "🌼"][Math.floor(Math.random() * 5)];
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 6000);
    }

    // continuous gentle flower rain every few seconds
    const interval = setInterval(() => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 3 + 3 + "s";
      flower.innerText = ["🌸", "🌷", "💮", "🌺", "🌼"][Math.floor(Math.random() * 5)];
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 6000);
    }, 200);

    // stop after ~15s
    setTimeout(() => clearInterval(interval), 15000);
  };

  return (
    <div className="container">
      <div className="heart-container"></div>

      <div className="polaroid-gallery">
        <div className="polaroid">
          <img src={Pic_1} alt="Memory 1" />
          <p>Our First Date 💕</p>
        </div>
        <div className="polaroid">
          <img src={Pic_2} alt="Memory 2" />
          <p>First Trip 🌊</p>
        </div>
        <div className="polaroid">
          <img src={Pic_3} alt="Memory 3" />
          <p>Our First Love Anniversary 🎬</p>
        </div>
        <div className="polaroid">
          <img src={Pic_4} alt="Memory 4" />
          <p>Our First Durga Pujo 💫</p>
        </div>
      </div>

      <div className="envelope-wrapper">
        <div
          className="envelope"
          onClick={() => {
            const envelope = document.querySelector(".envelope");
            const paper = document.querySelector(".paper");
            envelope.classList.toggle("open");
            paper.classList.toggle("show");
          }}
        >
          <div className="flap"></div>
          <div className="body"></div>
          <div className="paper">
            <p>
              My dearest Bhootuu, 💌<br /><br />
              From the day you entered my life, everything felt brighter.  
              This letter holds a promise — that no matter what,  
              I’ll stand by you, love you, and one day,  
              I’ll fulfill my biggest promise — to make you mine forever. 💍❤️<br /><br />
              Every day with you is a new adventure, and I promise to stay your Puchuu forever 💖  
              Today is Dhanteras — 18 October 2025.  
              I promise to marry you one day, with a real engagement ring. 💕
            </p>
          </div>
        </div>

        <p className="click-msg">A small Message to you my love 💖</p>

        {/* 🌸 Accept Promise Button (under envelope) */}
        <button className="accept-btn" onClick={startFlowerRain}>
          💖 I Accept The Promise 💍
        </button>
      </div>
    </div>
  );
};

export default Promise;

