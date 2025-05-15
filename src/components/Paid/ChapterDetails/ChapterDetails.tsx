import { useState, useEffect, useRef } from "react";
import { Chapter } from "../../../types";
import "./chapterDetails.css";
import { formatTime } from "../Video/VideoPlayer";
import { useFetchPaidData } from "../customHook";

interface Props {
  chapter: Chapter;
  currentVideo: string;
  setCurrentVideo: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
}
export const handleVideoEndRef = useRef<() => void>(() => {});

export default function ChapterDetails({
  chapter,
  timeLeft,
  currentVideo,
  setCurrentVideo,
}: Props) {
  const { data } = useFetchPaidData();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] =
    useState<number>(0);
  const [currentVideoIndex, setCurrentVideoIndex] =
    useState<number>(0);

  useEffect(() => {
    if (data?.chapters?.length) {
      setChapters(data.chapters);
    }
  }, [data]);

  handleVideoEndRef.current = () => {
    setChapters((prevChapters) => {
      if (!prevChapters.length) return prevChapters;

      const updatedChapters = [...prevChapters];
      const currentChapter = updatedChapters[currentChapterIndex];
      const videos = currentChapter?.videos;

      if (!videos || !videos[currentVideoIndex]) return prevChapters;

      // Mark current video as completed
      videos[currentVideoIndex].status = "completed";
      videos[currentVideoIndex].isCurrent = false;

      // Move to next video if exists
      if (videos[currentVideoIndex + 1]) {
        videos[currentVideoIndex + 1].status = "playing";
        videos[currentVideoIndex + 1].isCurrent = true;
        setCurrentVideo(videos[currentVideoIndex + 1].videoUrl);
        setCurrentVideoIndex(currentVideoIndex + 1);
      }

      return updatedChapters;
    });
  };

  // render UI based on `chapters`...

  return (
    <div className='main'>
      {chapter.videos.map((video, index) => (
        <div
          className={`video-wrapper ${
            video.isCurrent ? "isCurrent" : ""
          }`}
          key={index}
        >
          <div className='status-conatiner'>
            <div className='play-wrapper'>
              <p className='title'>{video.title}</p>
              <div className='play'>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCurrentVideo(video.videoUrl);
                    setCurrentVideoIndex(index);
                  }}
                >
                  <svg
                    className='playIcon'
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6C11 8.76 8.76 11 6 11C3.24 11 1 8.76 1 6ZM5.4 4.05C5.235 3.925 5 4.045 5 4.25V7.75C5 7.955 5.235 8.075 5.4 7.95L7.735 6.2C7.87 6.1 7.87 5.9 7.735 5.8L5.4 4.05Z'
                      fill={
                        video.isCurrent ? "lightgreen" : "lightgray"
                      }
                    />
                  </svg>
                </div>

                <p
                  className={
                    video.status === "playing"
                      ? "durationPlaying"
                      : video.status === "locked"
                      ? "durationLocked"
                      : "durationCompleted"
                  }
                >
                  {currentVideo === video.videoUrl
                    ? formatTime(timeLeft)
                    : formatTime(video.duration)}
                </p>
              </div>
            </div>
            <div
              className={
                video.status === "completed"
                  ? "statusCompleted"
                  : video.status === "playing"
                  ? "statusPlaying"
                  : ""
              }
            >
              {video.status === "completed"
                ? "Completed"
                : video.status === "playing"
                ? "Playing"
                : ""}
            </div>
          </div>
          <hr className='hr' />
        </div>
      ))}
    </div>
  );
}
