import { useState } from "react";
import BannerPicture from "../../../assets/Image.png";
import Vector from "../../../assets/Vector.png";
import Avatar from "../../../assets/photographer.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../CSS/banner.css";
import "../CSS/bannerBackground.css";

const Banner: React.FC = () => {
    const bannerPagesNumber: number = 4;
    const [bannerPage, setBannerPage] = useState<number>(1);

    function handleArrowClick(direction: string) {
    if (direction === "back") {
      if (bannerPage === 1) setBannerPage(bannerPagesNumber);
      else setBannerPage(bannerPage - 1);
    } else {
      if (bannerPage === bannerPagesNumber) setBannerPage(1);
      else setBannerPage(bannerPage + 1);
    }
  }
    return ( 
        <div className="parent-banner">
          <div className="banner">
            <img src={BannerPicture} alt="banner" id="banner-image" />
            <div id="banner-overlay1"></div>
            <div id="banner-overlay2"></div>
            <div id="vector-overlay">
              <img src={Vector} alt="overlay" />
            </div>
            <div
              className="arrow-back"
              onClick={() => handleArrowClick("back")}
            >
              <IoIosArrowBack className="arrows" />
            </div>
            <div
              className="arrow-forward"
              onClick={() => handleArrowClick("forward")}
            >
              <IoIosArrowForward className="arrows" />
            </div>

            <div className="banner-content">
              <h1>Learn something new everyday.</h1>
              <p>Become professionals and ready to join the world.</p>
              <button>Explore Photography</button>
            </div>
            <div className="banner-content2">
              <div className="author">
                <div className="avatar">
                  <img src={Avatar} alt="avatar" />
                </div>
                <div className="author-info">
                  <h1>Jessica Wong</h1>
                  <p>Photographer</p>
                </div>
              </div>
              <div className="watermark">
                <p className="p1">Winner Photo 2024 Awwards</p>
                <p className="p2">Joined Klevr since 2006</p>
              </div>
            </div>
          </div>
          <div className="pages-navigation">
            {[...Array(bannerPagesNumber)].map((_, index) => {
              return (
                <div
                  className={`${
                    bannerPage === index + 1 ? "active-page" : "inactive-page"
                  }`}
                  key={index}
                  onClick={() => setBannerPage(index + 1)}
                ></div>
              );
            })}
          </div>
        </div>
     );
}
 
export default Banner;