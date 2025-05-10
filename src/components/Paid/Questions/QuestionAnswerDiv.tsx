import { Chapter } from "../../../types";
import { motion, AnimatePresence } from "framer-motion";
import arrowIcon from "../../../assets/arrowIcon.png";
import dotIcon from "../../../assets/dot.svg";
import ChapterDetails from "../ChapterDetails/ChapterDetails";

interface QuestionProps {
  chapter: Chapter;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function QuestionAnswerDiv({
  chapter,
  index,
  activeIndex,
  setActiveIndex,
}: QuestionProps) {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    console.log("Clicked:", index, "Current active:", activeIndex);
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
              {chapter.totalDuration}
            </span>
          </div>
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
              transition={{ duration: 0.1 }}
              style={{ padding: "10px 15px" }}
            >
              <ChapterDetails chapter={chapter} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
