import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const App: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpened(true);
    }, 1000);
  };

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play().catch((e) => console.warn("Autoplay failed:", e));
    }
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 bg-pink-300 rounded-full animate-floating"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              bottom: "-2rem",
            }}
          ></div>
        ))}
      </div>

      {/* Envelope or Letter */}
      <div className="z-10 w-full max-w-sm">
        {!isOpened ? (
          <div
            onClick={handleOpen}
            className={`cursor-pointer transition-all duration-700 ease-in-out transform ${
              isOpening ? "scale-90 opacity-0" : "scale-100 opacity-100"
            } text-center`}
          >
            <img
              src="/enve.png"
              alt="Envelope"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-lg mx-auto"
            />
            <p className="mt-3 text-pink-600 text-base sm:text-lg font-semibold">
              Click to open 💌
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl w-full p-6 text-center space-y-4 animate-fadeIn">
            <h1 className="text-2xl font-bold text-pink-500">Hi Honey,</h1>
            <TypeAnimation
              sequence={[
                `Honey, first of all, sorry. I couldn’t think of any other way na mag-sorry with effort, because hehe I don’t have the courage to say sorry to you personally right now and this is the best I can do.\n\nHoney, sorry po for what I said earlier and yesterday. I know po you got a double meaning when I said “be careful,” and I’m really sorry po ato. Sorry if na-trigger ko and gipadako pa nako ang problema.\n\nI’m so sorry din for having very low emotional intelligence now and gabii, honey. I hope po you will forgive me. I’m sorry if I made you suffer and feel like I don’t trust you that’s on me, hon. I’m really sorry for everything. I hurt you, and that made me realize na maybe all this time I’ve been a bad boyfriend.\n\nI can’t promise anything with words, but I’ll prove everything with actions. I’m really sorry, honey. I love you so much.`,
              ]}
              wrapper="p"
              cursor={true}
              speed={50}
              className="text-gray-700 text-base sm:text-lg whitespace-pre-line leading-relaxed text-left"
            />
            <img
              src="/cat.gif"
              alt="Cute GIF"
              className="rounded-xl w-full max-h-52 sm:max-h-60 object-cover shadow-md"
            />
            <audio ref={audioRef} src="/Sparks.mp3" className="hidden" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
