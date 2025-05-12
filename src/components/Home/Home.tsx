import { useEffect, useState } from "react";
import "./CSS/home.css"
import BannerPicture from "../../assets/Image.png"
import WebinarPicture from "../../assets/Instructor4.png"
import Carts from "../../carts.json"
import Instructors from "../../instructors.json"
import SingleCart from "./features/SingleCart";
import { Cart, Instructor } from "./features/interfaces";
import SingleInstructor from "./features/singleInstructor";

const Home = () => {
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
    return ( 
        <main>
            <div className="mobile-list">
                <div className={`${showList === "all" ? 'active' : 'inactive'}`} onClick={() => handleListClick("all")}><h2>All</h2></div>
                <div className={`${showList === "illustrator" ? 'active' : 'inactive'}`} onClick={() => handleListClick("illustrator")}><h2>Illustrator</h2></div>
                <div className={`${showList === "photoshop" ? 'active' : 'inactive'}`} onClick={() => handleListClick("photoshop")}><h2>Photoshop</h2></div>
                <div className={`${showList === "UI design" ? 'active' : 'inactive'}`} onClick={() => handleListClick("ui design")}><h2>UI Design</h2></div>
                <div className={`${showList === "web" ? 'active' : 'inactive'}`} onClick={() => handleListClick("web")}><h2>Web</h2></div>
                <div className={`${showList === "mobile" ? 'active' : 'inactive'}`} onClick={() => handleListClick("mobile")}><h2>Mobile</h2></div>
                <div className={`${showList === "backend" ? 'active' : 'inactive'}`} onClick={() => handleListClick("backend")}><h2>Backend</h2></div>
                <div className={`${showList === "vue js" ? 'active' : 'inactive'}`} onClick={() => handleListClick("vue js")}><h2>Vue JS</h2></div>
            </div>
            <div className="banner">
                <img src={BannerPicture} alt="banner" id="banner-image"/>
                <div id="banner-overlay1"></div>
                <div id="banner-overlay2"></div>

                <div className="banner-content">
                    <h1>Learn something new everyday.</h1>
                    <p>Become professionals and ready to join the world.</p>
                    <button>Explore Photography</button>
                </div>
                <div className="banner-content2">
                    <div className="author">
                        <div className="avatar"></div>
                        <div className="author-info">
                            <h1>Jessica Wong</h1>
                            <p>Photographer</p>
                        </div>
                    </div>
                    <div className="watermark"></div>
                </div>
            </div>
            <div className="main-courses" style={{minHeight: "300px"}}>
                <h1 className="course-title1">More from Kitani Studio</h1>
                <h2 className="course-title2">Top picks for You.</h2>
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
                <h2 className="course-title2">Top picks for You.</h2>
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
                        <h2>Kitani Sarasvati</h2>
                    </div>
                    <button className="web-button"><h1>Get it Now</h1></button>
                </div>
            </div>
        </main> 
    );
}

export default Home;