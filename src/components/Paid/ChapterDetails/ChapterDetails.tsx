import { Chapter } from "../../../types";
import "./chapterDetails.css";
import playVideoIcon from "../../../assets/playVideo.svg";
import { formatTime } from "../Video/VideoPlayer";

interface Props {
  chapter: Chapter;
  currentVideo:string,
  setCurrentVideo: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
}

export default function ChapterDetails({
  chapter,
  timeLeft,
  currentVideo,
  setCurrentVideo,
}: Props) {
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
                  onClick={() => setCurrentVideo(video.videoUrl)}
                  style={{ cursor: "pointer" }}
                />

                <p className={`${currentVideo === video.videoUrl?"durationRed":"durationGreen"}`}>{currentVideo === video.videoUrl?formatTime(timeLeft):"0:00"}</p>
                {/* Hidden video element */}
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
