
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
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
      <div>
        <h1 className="head">HELLO MY LOVE ❤️</h1>
        <h2 className="btn">Excited ??</h2>

        {/* ✅ Works perfectly now */}
        <Link to="/q1">
          <button className="glow-btn">💖 Click Me 💖</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
