import { useRef, useState } from "react";
import { Chapter } from "../../../types";
import "./chapterDetails.css";
import playVideoIcon from "../../../assets/playVideo.svg";

interface Props {
  chapter: Chapter;
}

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return hrs > 0
    ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
    : `${pad(mins)}:${pad(secs)}`;
}

export default function ChapterDetails({ chapter }: Props) {
  const [videoDurations, setVideoDurations] = useState<{
    [key: number]: number;
  }>({});

  const videoRefs = useRef<{
    [key: number]: HTMLVideoElement | null;
  }>({});

  const handlePlay = (id: number) => {
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      videoElement.play().then(() => {
        const duration = videoElement.duration;
        if (!isNaN(duration)) {
          setVideoDurations((prev) => ({
            ...prev,
            [id]: Math.floor(duration),
          }));
        }
        videoElement.pause(); // optional: pause after getting duration
      });
    }
  };

  return (
    <div className='main'>
      {chapter.videos.map((video, index) => (
        <div className='video-wrapper' key={index}>
          <div className='status-conatiner'>
            <div className='play-wrapper'>
              <p className='title'>{video.title}</p>
              <div className='play'>
                <img
                  className='playIcon'
                  src={playVideoIcon}
                  alt='playVideoIcon'
                  onClick={() => handlePlay(video.id)}
                  style={{ cursor: "pointer" }}
                />
                <p className='duration'>
                  {videoDurations[video.id] !== undefined
                    ? formatTime(videoDurations[video.id])
                    : "--:--"}
                </p>
                {/* Hidden video element */}
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  onLoadedMetadata={(e) => {
                    const videoElement = e.currentTarget;
                    const duration = Math.floor(
                      videoElement.duration
                    );
                    setVideoDurations((prev) => ({
                      ...prev,
                      [video.id]: duration,
                    }));
                  }}
                  controls
                  src={video.videoUrl}
                  style={{ display: "block" }}
                />
              </div>
            </div>
            <div
              className={
                video.status === "completed"
                  ? "completed"
                  : video.status === "playing"
                  ? "uncompleted"
                  : "locked"
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
