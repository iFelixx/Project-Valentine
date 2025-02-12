import React, { useState, useEffect, useRef } from "react";

interface FontStyles {
  titleFont: {
    family: string;
    size: string;
    weight: string;
    color: string;
  };

  artistFont: {
    family: string;
    size: string;
    weight: string;
    color: string;
  };

  iconFont: {
    family: string;
    size: string;
    weight: string;
    color: string;
  };
  
  volFont: {
    color: string;
  };

  vol2Font: {
    family: string;
    size: string;
    weight: string;
    color: string;
  };
}

const defaultFontStyles: FontStyles = {
  titleFont: {
    family: "Fredoka",
    size: "18px",
    weight: "600",
    color: "#8576ff",
  },

  artistFont: {
    family: "Fredoka",
    size: "17px",
    weight: "500",
    color: "#c4b7ee", 
  },

  iconFont: {
    family: "Fredoka",
    size: "16px",
    weight: "500",
    color: "#c4b7ee", 
  },

  volFont: {
    color: "#c4b7ee", 
  },

  vol2Font: {
    family: "Fredoka",
    size: "16px",
    weight: "500",
    color: "#c4b7ee", 
  },
};

interface CardProps {
  fontStyles?: FontStyles;
}

const Card = ({ fontStyles = defaultFontStyles }: CardProps) => {
  const [isLoved, setIsLoved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/die4u.mp3");
      audioRef.current.volume = 0.5;
      audioRef.current.loop = false; 
    }

    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(Math.floor(audio!.currentTime));
    };

    const updateDuration = () => {
      setDuration(Math.floor(audio!.duration));
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0; 
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, []);

  const handlePlayPause = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        try {
          await audioRef.current.play();
        } catch (err) {
          console.error("User interaction required to play audio", err);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
        <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
          <div className="h-40 w-40 sm:h-20 sm:w-20 md:h-14 md:w-14 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
            <img 
              src="images\music.png" 
              alt="Music Icon" 
              className="h-18 w-18 object-cover rounded-lg"
            />
          </div>

          <div className="text-center sm:text-left">
            <h3 
              style={{
                fontFamily: fontStyles.titleFont.family,
                fontSize: fontStyles.titleFont.size,
                fontWeight: fontStyles.titleFont.weight,
                color: fontStyles.titleFont.color,
              }}
              className="mb-1"
            >
              Die For You
            </h3>
            <p 
              style={{
                fontFamily: fontStyles.artistFont.family,
                fontSize: fontStyles.artistFont.size,
                fontWeight: fontStyles.artistFont.weight,
                color: fontStyles.artistFont.color,
              }}
            >
              The Weeknd
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          {/* Controls */}
          <div className="flex items-center gap-4">
            <svg
              onClick={() => setIsLoved(!isLoved)}
              className="h-6 w-6 cursor-pointer"
              fill={isLoved ? "#f94848" : "none"}
              stroke={isLoved ? "#f94848" : "#f94848"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>

            <svg
              onClick={handlePlayPause}
              className="h-6 w-6 cursor-pointer"
              fill={isPlaying ? "none" : "none"}
              stroke={isPlaying ? "#f94848" : "#f94848"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isPlaying ? (
                <>  
                  <rect x="5" y="3" width="4" height="18" />
                  <rect x="15" y="3" width="4" height="18"/>
                </>  
              ) : (
                <polygon points="5,3 19,12 5,21" />
              )}
            </svg>
          </div>

          <div className="w-full sm:w-[200px] flex items-center gap-2">
          <svg className="h-8 w-8" fill="none" stroke={fontStyles.volFont.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            </svg>
            <div className="w-full">
              <div className="relative h-1 bg-neutral-200 rounded overflow-hidden dark:bg-neutral-800">
              <div className="absolute left-0 top-0 h-full bg-[#8576ff] w-1/2" />
              </div>
            </div>
            <span 
              style={{
                fontFamily: fontStyles.vol2Font.family,
                fontSize: fontStyles.vol2Font.size,
                fontWeight: fontStyles.vol2Font.weight,
                color: fontStyles.vol2Font.color,
              }}
              className="text-sm shrink-0"
            >
              50%
            </span>
          </div>

          <div className="flex justify-between w-full sm:w-[200px] text-sm">
            <span 
              style={{
                fontFamily: fontStyles.iconFont.family,
                fontSize: fontStyles.iconFont.size,
                fontWeight: fontStyles.iconFont.weight,
                color: fontStyles.iconFont.color,
              }}
            >
              {formatTime(currentTime)}
            </span>
            <span 
              style={{
                fontFamily: fontStyles.iconFont.family,
                fontSize: fontStyles.iconFont.size,
                fontWeight: fontStyles.iconFont.weight,
                color: fontStyles.iconFont.color,
              }}
            >
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;