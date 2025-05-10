import { Chapter } from "../../../types";
import "./chapterDetails.css";
interface g {
  chapter: Chapter;
}
export default function ChapterDetails({ chapter }: g) {
  return (
    <div>
      {chapter.videos.map((video) => (
        <div className='videos'>
          <div className='status-conatiner'>
            <p className="title">{video.title}</p>
            <p className="status">{video.status}</p>
          </div>
          <hr className='hr' />
        </div>
      ))}
    </div>
  );
}
