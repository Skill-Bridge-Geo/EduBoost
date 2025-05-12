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
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: number }>(
    {}
  );

  const videoRefs = useRef<{
    [key: number]: HTMLVideoElement | null;
  }>({});

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
                  onClick={() => videoRefs.current[video.id]?.play()}
                  style={{ cursor: "pointer" }}
                />
                <p className='duration'>
                  {timeLeft[video.id] !== undefined
                    ? formatTime(timeLeft[video.id])
                    : "--:--"}
                </p>
                {/* Hidden video element */}
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  onLoadedMetadata={(e) => {
                    const duration = Math.floor(
                      e.currentTarget.duration
                    );
                    setVideoDurations((prev) => ({
                      ...prev,
                      [video.id]: duration,
                    }));
                    setTimeLeft((prev) => ({
                      ...prev,
                      [video.id]: duration,
                    }));
                  }}
                  onTimeUpdate={(e) => {
                    const currentTime = e.currentTarget.currentTime;
                    const totalDuration = e.currentTarget.duration;
                   const current = Math.floor(currentTime);
                   const remaining = Math.max(
                     Math.floor(totalDuration - current),
                     0
                   );

                    setTimeLeft((prev) => ({
                      ...prev,
                      [video.id]: remaining,
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
