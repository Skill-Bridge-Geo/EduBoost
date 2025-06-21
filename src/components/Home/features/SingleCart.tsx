import { Cart1 } from "../../../components/Home/features/interfaces";
import "../CSS/cart.css"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

const SingleCart: React.FC<{
    myCart: Cart1;
}> = ({myCart}) => {
    return ( 
        <div className="single-cart">
            <div className="image">
                <picture className="picture">
                    <img src={myCart.imageUrl} alt="placeholder" className="placeholder-img"/>
                </picture>
                <MdOutlinePersonOutline className="person-icon"/>
            </div>
            <div className="labels">
                <div className="label1"><h1>Best Seller</h1></div>
                <div className="label2"><h1>{myCart.discountPercent}% OFF</h1></div>
            </div>
            <h1 className="title">{myCart.title}</h1>
            <div className="instructor">
                <MdOutlinePersonOutline style={{color: "#1B1B1B99"}} className="intr-person-icon"/>
                <p>{myCart.instructor}</p>
            </div>
            <p className="text">{myCart.description}</p>
            <div className="rate">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            {ratingValue <= myCart.rating ? (
                                <FaStar className="rate-star" />
                            ) : ratingValue === Math.ceil(myCart.rating) ? (
                                <FaStarHalfAlt className="rate-star" />
                            ) : (
                                <FaRegStar className="rate-star" />
                            )}
                        </label>
                    );
                })}
                <p className="reviews">&#40;{myCart.reviewCount}&#41;</p>
            </div>
            <div className="price">
                <h1>${Number(myCart.priceDiscounted).toFixed(2)}</h1>
                <p>${Number(myCart.priceOriginal).toFixed(2)}</p>
            </div>
        </div> 
    );
}
 
export default SingleCart;