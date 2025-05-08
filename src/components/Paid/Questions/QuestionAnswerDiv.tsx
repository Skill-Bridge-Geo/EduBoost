import { Chapter } from "../../../types";
import React from "react";

import arrowIcon from "../../../assets/arrowIcon.png";
import dotIcon from "../../../assets/dot.svg";

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
    const isActive=activeIndex ===index
      const toggleAccordion = () => {
        setActiveIndex(isActive ? null : index);
      };
  return (
    <div
      onClick={toggleAccordion}
      className='quest-answ-parent'
    >
      <div className='chapter-child'>
        <h3 className='chapter-title'>{chapter.title}</h3>
        <p>
          1/{chapter.videosCount} <img src={dotIcon} alt='dot icon' />{" "}
          <span>{chapter.duration}</span>
        </p>
      </div>
      <img
        className={`arrow-icon ${isActive? "arrow-rotated" : ""}`}
        src={arrowIcon}
        alt='arrow icon'
      />
    </div>
  );
}
