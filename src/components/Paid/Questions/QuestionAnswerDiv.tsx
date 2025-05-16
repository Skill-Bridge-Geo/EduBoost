import { Chapter } from "../../../types";
import { motion, AnimatePresence } from "framer-motion";
import arrowIcon from "../../../assets/arrowIcon.png";
import dotIcon from "../../../assets/dot.svg";
import ChapterDetails from "../ChapterDetails/ChapterDetails";
import { formatTime } from "../Video/VideoPlayer";

interface QuestionProps {
  currentVideo: string;
  chapter: Chapter;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentVideo: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
}

export default function QuestionAnswerDiv({
  currentVideo,
  setCurrentVideo,
  chapter,
  index,
  activeIndex,
  setActiveIndex,
  timeLeft,
}: QuestionProps) {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className='quest-answ-parent'>
      <div onClick={toggleAccordion} className='question-arrow'>
        <div className='chapter-child'>
          <h3 className='chapter-title'>{chapter.title}</h3>

          <div className='chapter-details-info'>
            <p>
              1/<span>{chapter.videos.length} Videos</span>
            </p>
            <img src={dotIcon} alt='dot icon' />
            <span className='total-duration'>
              {formatTime(chapter.totalDuration)}
            </span>
          </div>

          <p className='chapter-details-info'>
            <p>
              1/<span>{chapter.videos.length} Videos</span>
            </p>
            <img src={dotIcon} alt='dot icon' />{" "}
            <span className='total-duration'>
              {chapter.totalDuration}
            </span>
          </p>

        </div>
        <img
          className={`arrow-icon ${isActive ? "arrow-rotated" : ""}`}
          src={arrowIcon}
          alt='arrow icon'
        />
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key='content'
            className='chapter-details'
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ padding: "10px 15px" }}
            >
              <ChapterDetails
                chapter={chapter}
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
                timeLeft={timeLeft}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`chapter-details ${isActive ? "showAnswer" : ""}`}
        style={{
          height,
          padding: isActive ? "15px" : "0px",
        }}
        ref={contentRef}
      >
        
      </div>

    </div>
  );
}
