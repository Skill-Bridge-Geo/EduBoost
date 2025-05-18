import "./video.css";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Review from "./Review";
import About from "./About";
import { useFetchPaidData } from "../customHook";
import checkedIcon from "../../../assets/checked.svg";
import signedIcon from "../../../assets/signed.svg";
import Header from "../../Header/Header";
import Questions from "../Questions/Questions";

export default function Video() {
  const { data } = useFetchPaidData();
  const [isSelected, setIsSelected] = useState<string>("Courses");
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSelected("Courses");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='main'>
      <div className='parent'>
        <section className='first-child'>
          <div className='header'>
            <Header />
          </div>
          <div className='video-container'>
            <VideoPlayer
              currentVideo={currentVideo}
              setTimeLeft={setTimeLeft}
            />
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
            <hr className='course-hr' />
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

          {isSelected === "Courses" ? (
            <Questions
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              timeLeft={timeLeft}
            />
          ) : isSelected === "Review" ? (
            <Review />
          ) : (
            <About />
          )}
        </section>
      </div>
      <section
        
        className='second-section'
      >
        <div className="scroll-options">
          <div className='about-desktop'>
            <h2 className="info-title">About Course</h2>
            <About />
          </div>
          <div className='review-desktop'>
            <h2 className="info-title">Review</h2>
            <Review />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
