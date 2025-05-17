import "./question.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { CourseData } from "../../../types";
import QuestionAnswerDiv from "./QuestionAnswerDiv";

interface props {
  currentVideo: string;
  setCurrentVideo: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
}

export default function Questions({
  setCurrentVideo,
  timeLeft,
  currentVideo,
}: props) {
  const [data, setData] = useState<CourseData | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get("/paid.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <div className='Parent'>
      {data?.chapters.map((chapter, index) => (
        <QuestionAnswerDiv
          key={index}
          chapter={chapter}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
          timeLeft={timeLeft}
        />
      ))}
    </div>
  );
}
