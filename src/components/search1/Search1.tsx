import { FilterProvider } from "./FilterContext";
import "./Search1.css";
import LeftPart from "./parts/LeftPart";
import RightPart from "./parts/RightPart";
import banner from "../../assets/Rhône.png";

export default function Search1() {
  return (
    <FilterProvider>
      <main className="container">
        <div className="top">
          <div className="left">
            <LeftPart />
          </div>
          <div className="right">
            <RightPart />
          </div>
        </div>
        <div className="banner">
          <img className="bannerPic" src={banner} />
          <div className="banerText">
            {" "}
            <h1 className="mainText">Join Klevr now to get 35% off</h1>
            <h2 className="bodyText">
              With our responsive themes and mobile and desktop apps, <br />
              enjoy a seamless experience on any device so will your blog the
              best visitors
            </h2>
            <button className="joinKlevr">Join Klevr</button>
          </div>
        </div>
      </main>
    </FilterProvider>
  );
}
