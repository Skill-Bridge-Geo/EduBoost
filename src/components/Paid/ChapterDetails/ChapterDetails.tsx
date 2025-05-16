import { Chapter } from "../../../types";
import "./chapterDetails.css";
import { formatTime } from "../Video/VideoPlayer";

// import { useFetchPaidData } from "../customHook";

interface Props {
  chapter: Chapter;
  currentVideo: string;
  setCurrentVideo: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
}
// const {data}=useFetchPaidData()

export default function ChapterDetails({
  chapter,
  timeLeft,
  currentVideo,
  setCurrentVideo,
}: Props) {
  return (
    <div className='main'>
      {chapter.videos.map((video, index) => (
        <div
          className={`video-wrapper ${
            video.isCurrent && "isCurrent"
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
                    video.status = "playing";
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
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6C11 8.76 8.76 11 6 11C3.24 11 1 8.76 1 6ZM5.4 4.05C5.235 3.925 5 4.045 5 4.25V7.75C5 7.955 5.235 8.075 5.4 7.95L7.735 6.2C7.87 6.1 7.87 5.9 7.735 5.8L5.4 4.05Z'
                      fill={`${
                        video.isCurrent ? "lightgreen" : "lightgray"
                      }`}
                    />
                  </svg>
                </div>

                <p
                  className={`${
                    video.status === "playing"
                      ? "durationPlaying"
                      : video.status === "locked"
                      ? "durationLocked"
                      : "durationCompleted"
                  }`}
                >
                  {currentVideo === video.videoUrl
                    ? formatTime(timeLeft)
                    : formatTime(video.duration)}
                </p>
                {/* Hidden video element */}
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
