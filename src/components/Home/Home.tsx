import { useEffect, useState } from "react";
import "./CSS/home.css";
import BannerPicture from "../../assets/Image.png";
import Vector from "../../assets/Vector.png";
import Avatar from "../../assets/photographer.png";
import WebinarPicture from "../../assets/Instructor4.png"
import Carts from "../../carts.json";
import Instructors from "../../instructors.json";
import SingleCart from "./features/SingleCart";
import { Cart, Instructor } from "./features/interfaces";
import SingleInstructor from "./features/singleInstructor";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
    const bannerPagesNumber: number = 4;
    const [bannerPage, setBannerPage] = useState<number>(1);
    const [showList, setShowList] = useState<string>("all");
    const myInstructors: Instructor[] = Instructors;
    const Trendings: Cart[] = Carts.filter((cart: Cart) => cart.isTrending === true);
    const [cartsToShow, setCartsToShow] = useState<Cart[]>(Carts.filter((cart: Cart) => cart.isTrending === false));
    useEffect(() => {
        if(showList == "all"){
            setCartsToShow(Carts.filter((cart: Cart) => cart.isTrending === false));
        }else{
            setCartsToShow(Carts.filter((cart: Cart) => cart.category.toLowerCase() === showList));
        }
    }, [showList]);
    function handleListClick(str: string){
        setShowList(str);
    }
    function handleArrowClick(direction: string){
        if(direction === "back"){
            if(bannerPage === 1) setBannerPage(bannerPagesNumber);
            else setBannerPage(bannerPage - 1);
        }else{
            if(bannerPage === bannerPagesNumber) setBannerPage(1);
            else setBannerPage(bannerPage + 1);
        }
    }
    return ( 
        <main>
            <div className="showlist-and-banner-parent">
                <div className="show-list">
                    <div className={`${showList === "all" ? 'active' : 'inactive'}`} onClick={() => handleListClick("all")}><p>All<span className="tablet-span">&nbsp;Recommendation</span></p></div>
                    <div className={`${showList === "illustrator" ? 'active' : 'inactive'}`} onClick={() => handleListClick("illustrator")}><p><span className="tablet-span">Adobe&nbsp;</span>Illustrator</p></div>
                    <div className={`${showList === "photoshop" ? 'active' : 'inactive'}`} onClick={() => handleListClick("photoshop")}><p><span className="tablet-span">Adobe&nbsp;</span>Photoshop</p></div>
                    <div className={`${showList === "ui design" ? 'active' : 'inactive'}`} onClick={() => handleListClick("ui design")}><p>UI Design</p></div>
                    <div className={`${showList === "web" ? 'active' : 'inactive'}`} onClick={() => handleListClick("web")}><p>Web<span className="tablet-span">&nbsp;Programming</span></p></div>
                    <div className={`${showList === "mobile" ? 'active' : 'inactive'}`} onClick={() => handleListClick("mobile")}><p>Mobile<span className="tablet-span">&nbsp;Programming</span></p></div>
                    <div className={`${showList === "backend" ? 'active' : 'inactive'}`} onClick={() => handleListClick("backend")}><p>Backend<span className="tablet-span">&nbsp;Development</span></p></div>
                    <div className={`${showList === "vue js" ? 'active' : 'inactive'}`} onClick={() => handleListClick("vue js")}><p>Vue JS</p></div>
                </div>
                <div className="parent-banner">
                    <div className="banner">
                        <img src={BannerPicture} alt="banner" id="banner-image"/>
                        <div id="banner-overlay1"></div>
                        <div id="banner-overlay2"></div>
                        <div id="vector-overlay"><img src={Vector} alt="overlay" /></div>
                        <div className="arrow-back" onClick={() => handleArrowClick("back")}><IoIosArrowBack className="arrows"/></div>
                        <div className="arrow-forward" onClick={() => handleArrowClick("forward")}><IoIosArrowForward className="arrows"/></div>

                        <div className="banner-content">
                            <h1>Learn something new everyday.</h1>
                            <p>Become professionals and ready to join the world.</p>
                            <button>Explore Photography</button>
                        </div>
                        <div className="banner-content2">
                            <div className="author">
                                <div className="avatar"><img src={Avatar} alt="avatar" /></div>
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
                            return(
                                <div className={`${bannerPage === index + 1 ? 'active-page' : 'inactive-page'}`} key={index} onClick={() => setBannerPage(index + 1)}></div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="main-courses" style={{minHeight: "300px"}}>
                <h1 className="course-title1">More from Kitani Studio</h1>
                <p className="course-title2">Top picks for You.</p>
                <div className="course-list">
                    {cartsToShow.map((cart: Cart) => {
                        return(
                            <SingleCart myCart={cart} key={cart.id}/>
                        )
                    })}
                </div>
            </div>
            {showList === "all" ? 
            <div className="main-courses">
                <h1 className="course-title1">Trending</h1>
                <p className="course-title2">Top picks for You.</p>
                <div className="course-list">
                    {Trendings.map((cart: Cart) => {
                        return(
                            <SingleCart myCart={cart} key={cart.id}/>
                        )
                    })}
                </div>
            </div> : 
            <></>}
            <div className="instructors">
                <h1 className="instr-header">Popular Instructor</h1>
                <div className="instr-list">
                    {myInstructors.map((instructor: Instructor) => {
                        return(
                            <SingleInstructor myInstructor={instructor} key={instructor.id}/>
                        )
                    })}
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
                    <button className="web-button"><h1>Get it Now</h1></button>
                </div>
            </div>
        </main> 
    );
}

export default Home;