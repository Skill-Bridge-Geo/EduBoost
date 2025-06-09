import { useEffect, useState } from "react";
import "./CSS/Home.css";
import "./CSS/webinar&sub.css";
import WebinarPicture from "../../assets/Instructor4.png";
import SubscriptionImage from "../../assets/Aare.png";
import SingleCart from "./features/SingleCart";
import { Cart, Instructor } from "./features/interfaces";
import SingleInstructor from "./features/singleInstructor";
import { IoMdSearch } from "react-icons/io";
import ShowList from "./features/showList";
import Banner from "./features/banner";
import axios from "axios";

const Home = () => {
  const [showList, setShowList] = useState<string>("all");
  const [fetchedInstructors, setFetchedInstructors] = useState<Instructor[]>([]);
  const [Carts, setCarts] = useState<Cart[]>([]);
  const [Trendings, setTrendings] = useState<Cart[]>([]);
  const baseURL = "http://localhost:5000/";
  async function fetchCarts() {
    try {
      const response = await axios.post(`${baseURL}homepage/allStudio`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching carts:", error);
      return [];
    }
  }
  async function fetchInstructors() {
    try {
      const response = await axios.post(`${baseURL}homepage/allInstructors`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching carts:", error);
      return [];
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const cartsData = await fetchCarts();
      const instructorsData = await fetchInstructors();
      setFetchedInstructors(instructorsData);
      setTrendings([...(cartsData.filter(
        (cart: Cart) => cart.isTrending === true
      ))]);
      setCarts(cartsData);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="showlist-and-banner-parent">
        <ShowList showList={showList} setShowList={setShowList} />
        <Banner />
      </div>

      <div className="main-courses" style={{ minHeight: "300px" }}>
        <h1 className="course-title1">More from Kitani Studio</h1>
        <p className="course-title2">Top picks for You.</p>
        <div className="course-list">
          {Carts.filter((cart: Cart) => {
            if (showList === "all") return !cart.isTrending;
            return cart.category.toLowerCase() === showList;
          }).map(cart => (
            <SingleCart myCart={cart} key={cart._id} />
          ))}
        </div>
      </div>

      {showList === "all" && (
        <div className="main-courses">
          <h1 className="course-title1">Trending</h1>
          <p className="course-title2">Top picks for You.</p>
          <div className="course-list">
            {Trendings.map(cart => (
              <SingleCart myCart={cart} key={cart._id} />
            ))}
          </div>
        </div>
      )}

      <div className="instructors">
        <h1 className="instr-header">Popular Instructor</h1>
        <p className="instr-header-p">
          We know the best things for You. Top picks for You.
        </p>
        <div className="instr-list">
          {fetchedInstructors.map(instructor => (
            <SingleInstructor myInstructor={instructor} key={instructor._id} />
          ))}
        </div>
      </div>

      <div className="parent-webinar">
        <div className="webinar">
          <div className="image-container1">
            <img src={WebinarPicture} alt="webinar" />
          </div>
          <div className="webinar-overlay"></div>
          <div className="web-header">
            <h1>WEBINAR</h1>
            <p>August 16, 2020</p>
          </div>
          <div className="web-info">
            <h1>Film Maker Skillset for Beginner.</h1>
            <p>Kitani Sarasvati</p>
          </div>
          <button className="web-button">
            <h1>Get it Now</h1>
          </button>
        </div>
      </div>

      <div className="subscription">
        <img
          src={SubscriptionImage}
          alt="background"
          className="sub-background"
        />
        <h1 className="sub-font">Get Amazing Discount and Course Update </h1>
        <div className="sub-font2">
          <h1>Join and get amazing discount</h1>
          <p>With our responsive themes and mobile and desktop apps</p>
        </div>
        <div className="email-area">
          <input type="text" placeholder="Email Address" />
          <button>
            <h1>Subscribe</h1>
          </button>
          <IoMdSearch className="search-icon" />
        </div>
      </div>
    </main>
  );
};

export default Home;