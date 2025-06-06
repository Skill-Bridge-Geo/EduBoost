import "./video.css";
import { useEffect, useState } from "react";
import { CourseData } from "../../../types"; // I
import VideoPlayer from "./VideoPlayer";
import axios from "axios";

import connectionIocn from "../../../assets/Cellular Connection.png";
import wifiIcon from "../../../assets/Wifi.svg";
import batteryIcon from "../../../assets/Battery.svg";
import checkedIcon from "../../../assets/checked.svg";
import signedIcon from "../../../assets/signed.svg";
import Header from "../../Header/Header";
import Questions from "../Questions/Questions";

export default function Video() {
  const [data, setData] = useState<CourseData | null>(null);
  const [isSelected, setIsSelected] = useState<string>("Courses");

  useEffect(() => {
    axios
      .get("/paid.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='parent'>
      <section className='first-child'>
        <div className='header'>
          <Header />
        </div>
        <div className='mobileTools'>
          <p>9:41</p>
          <div className='tools'>
            <img src={connectionIocn} alt='connection Iocn' />
            <img src={wifiIcon} alt='wifi Icon' />
            <img src={batteryIcon} alt='battery Icon' />
          </div>
        </div>
        <div className='video-container'>
          <VideoPlayer />
        </div>

        <section className='course-raitings'>
          <h2>{data.course.title}</h2>
          <div className='studio-container'>
            <div className='studioName'>
              <p>Kitani Studio</p>
              <span>Design Studio</span>
            </div>
            <div className='detailed-raitings'>
              <div className='check'>
                <img src={checkedIcon} alt='people icon' />
                <span>{data.course.views}</span>
              </div>
              <div className='sign'>
                {" "}
                <img src={signedIcon} alt='sign icon' />
                <span>{data.course.likes}</span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='second-child'>
        <div className='course-info-wrapper'>
          <div className='course-info'>
            <p
              className={`${
                isSelected === "Courses" ? "selected" : ""
              }`}
              onClick={() => setIsSelected("Courses")}
            >
              Courses
            </p>
            <p
              className={`${
                isSelected === "Review" ? "selected" : ""
              }`}
              onClick={() => setIsSelected("Review")}
            >
              Review
            </p>
            <p
              className={`${
                isSelected === "About" ? "selected" : ""
              }`}
              onClick={() => setIsSelected("About")}
            >
              About
            </p>
          </div>
          <div className='underline-container'>
            <div
              className='tab-underline'
              style={{
                transform:
                  isSelected === "Courses"
                    ? "translateX(0%)"
                    : isSelected === "Review"
                    ? "translateX(126%)"
                    : "translateX(256%)",
              }}
            ></div>
          </div>
        </div>
        <Questions />
      </section>
    </div>
  );
}
