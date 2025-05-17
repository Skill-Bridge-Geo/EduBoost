import { Cart } from "../../../components/Home/features/interfaces";
import "../CSS/cart.css"
import Image from "../../../assets/placeholder1.png"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

const SingleCart: React.FC<{
    myCart: Cart;
}> = ({myCart}) => {
    return ( 
        <div className="single-cart">
            <div className="image">
                <picture className="picture">
                    <img src={Image} alt="placeholder" className="placeholder-img"/>
                </picture>
                <MdOutlinePersonOutline className="person-icon"/>
            </div>
            <div className="labels">
                <div className="label1"><h1>Best Seller</h1></div>
                <div className="label2"><h1>{myCart.discount}% OFF</h1></div>
            </div>
            <h1 className="title">{myCart.title}</h1>
            <div className="instructor">
                <MdOutlinePersonOutline style={{color: "#1B1B1B99"}} className="intr-person-icon"/>
                <p>{myCart.instructor}</p>
            </div>
            <p className="text">{myCart.text}</p>
            <div className="rate">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            {ratingValue <= myCart.rate ? (
                                <FaStar className="rate-star" />
                            ) : ratingValue === Math.ceil(myCart.rate) ? (
                                <FaStarHalfAlt className="rate-star" />
                            ) : (
                                <FaRegStar className="rate-star" />
                            )}
                        </label>
                    );
                })}
                <p className="reviews">&#40;{myCart.reviews}&#41;</p>
            </div>
            <div className="price">
                <h1>{myCart.newPrice}</h1>
                <p>{myCart.oldPrice}</p>
            </div>
        </div> 
    );
}
 
export default SingleCart;