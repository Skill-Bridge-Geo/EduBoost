import { Chapter } from "../../../types";
import { useState, useEffect, useRef } from "react";
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
  const isActive = activeIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isActive]);

  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className='quest-answ-parent'>
      <div onClick={toggleAccordion} className='question-arrow'>
        <div className='chapter-child'>
          <h3 className='chapter-title'>{chapter.title}</h3>
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
