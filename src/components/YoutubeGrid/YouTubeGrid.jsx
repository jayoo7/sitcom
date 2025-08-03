import { useEffect, useRef, useState } from "react";
import "./YouTubeGrid.css";

const videoIds = [
  "NpAWGWbnY6g",
  "Lrgd2nWcH-w",
  "9Gj8iYJy5bA",
  "dl7bm5o28qE",
  "psV4LGGftjk",
  "sAXLnPgwz_w",
  "gOYzVStwoy0",
  "hukCzZrkG6I",
];

function YouTubeGrid() {
  const playersRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      videoIds.forEach((id, i) => {
        playersRef.current[i] = new window.YT.Player(`player${i}`, {
          videoId: id,
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
        });
      });

      setTimeout(() => {
        playCurrentPair(0);
      }, 1000);
    };
  }, []);

  const playCurrentPair = (startIndex) => {
    playersRef.current.forEach((player) => {
      if (player?.pauseVideo) player.pauseVideo();
    });

    for (let i = 0; i < 2; i++) {
      const index = (startIndex + i) % videoIds.length;
      const player = playersRef.current[index];
      if (player?.playVideo) {
        player.mute();
        player.seekTo(0);
        player.playVideo();
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 2) % videoIds.length;
    setCurrentIndex(nextIndex);
    playCurrentPair(nextIndex);
  };

  return (
    <div className="App">
      <h1>React YouTube Video Grid</h1>
      <div className="video-grid">
        {videoIds.map((_, index) => (
          <div key={index} className="video-container" id={`player${index}`}></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handleNext}>▶️ Next</button>
      </div>
    </div>
  );
}

export default YouTubeGrid;
