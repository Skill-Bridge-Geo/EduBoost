import { Instructor } from "../../../components/Home/features/interfaces";
import "../CSS/instructor.css"
import img1 from "../../../assets/Instructor1.png"
import img2 from "../../../assets/Instructor2.png"
import img3 from "../../../assets/Instructor3.png"
import img4 from "../../../assets/Instructor4.png"

const SingleInstructor: React.FC<{
    myInstructor: Instructor;
}> = ({myInstructor}) => {
    const images = [img1, img2, img3, img4];
    return ( 
        <div className="single-instructor">
            <div className="image-container">
                <img src={images[myInstructor.id - 1]} alt="instructor" />
            </div>
            <div className="info">
                <h1>{myInstructor.name}</h1>
                <p>{myInstructor.position}</p>
            </div>
        </div>
    );
}
 
export default SingleInstructor;