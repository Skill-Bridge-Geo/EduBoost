import { Chapter } from "../../../types";
import "./chapterDetails.css";
interface g {
  chapter: Chapter;
}
export default function ChapterDetails({ chapter }: g) {
  return (
    <div className='main'>
      {chapter.videos.map((video, index) => (
        <div className='video-wrapper' key={index}>
          <div className='status-conatiner'>
            <p className='title'>{video.title}</p>
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
