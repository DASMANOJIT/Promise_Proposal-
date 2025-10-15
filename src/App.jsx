
import React, { useEffect, useRef } from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Landing from "./component/landing/landing.jsx";
import Q1 from "./component/question_1/q1.jsx";
import QNA from "./component/QNA/qna.jsx";
import Promise from './component/promise/promise.jsx';
//import Music from '../public/bg.mp3';
function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      const playAudio = () => {
        audio.play().catch(() => {
          console.log("Autoplay blocked — waiting for user interaction");
        });
      };
      playAudio();
      document.addEventListener("click", playAudio, { once: true });
    }
  }, []);

  return (
    <HashRouter>
      {/* Background music stays forever */}
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/bg.mp3`}
        loop
        preload="auto"
        style={{ display: "none" }}
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/q1" element={<Q1 />} />
        <Route path="/qna" element={<QNA />} />
        <Route path="/promise" element={<Promise />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
