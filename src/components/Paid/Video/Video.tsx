import "./video.css";
import { useEffect, useState } from "react";
import { CourseData } from "../../../types"; // I

import axios from "axios";
import connectionIocn from "../../../assets/Cellular Connection.png";
import wifiIcon from "../../../assets/Wifi.svg";
import batteryIcon from "../../../assets/Battery.svg";
import checkedIcon from "../../../assets/checked.svg";
import signedIcon from "../../../assets/signed.svg";
import Header from "../../Header/Header";

export default function Video() {
  const [data, setData] = useState<CourseData | null>(null);


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
          <iframe
            width='100%'
            height='212px'
            src={data.course.video.url}
            title='Course Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
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
      
        <h1>axsasx</h1>
      </section>
    </div>
  );
}
